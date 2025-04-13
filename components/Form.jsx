"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // Check rate limiting (2 minutes between submissions)
    const lastSubmittedTime = sessionStorage.getItem("lastSubmittedTime");
    const currentTime = Date.now();
    const RATE_LIMIT_MS = 120 * 1000; // 2 minutes

    if (lastSubmittedTime) {
      const timeSinceLastSubmission = currentTime - parseInt(lastSubmittedTime);
      if (timeSinceLastSubmission < RATE_LIMIT_MS) {
        const remainingTime = Math.ceil(
          (RATE_LIMIT_MS - timeSinceLastSubmission) / 1000
        );
        setIsWaiting(true);
        setWaitTime(remainingTime);
        toast.warning("Please wait before sending another message", {
          description: `You can send another message in ${remainingTime} seconds`,
        });
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/adeolaastephen@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `New contact form submission from ${data.name}`,
            _template: "table",
            _captcha: "false",
            _autoresponse: "Hello, Thank you for contacting me...",
            _next: window.location.href,
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        toast.success("Message sent successfully!", {
          description: `Thank you ${data.name} for reaching out. I'll get back to you soon.`,
          duration: 5000,
        });
        sessionStorage.setItem("lastSubmittedTime", currentTime.toString());
        reset();
      } else {
        throw new Error(responseData.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: error.message || "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
      setIsWaiting(false);
    }
  };

  // Update wait time display
  useEffect(() => {
    if (isWaiting && waitTime > 0) {
      const timer = setInterval(() => {
        setWaitTime((prev) => {
          if (prev <= 1) {
            setIsWaiting(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isWaiting, waitTime]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4"
      noValidate // Prevent native browser validation
    >
      {/* Name */}
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className={errors.name ? "border-destructive" : ""}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {errors.name && (
        <p className="text-sm text-destructive">{errors.name.message}</p>
      )}

      {/* Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {errors.email && (
        <p className="text-sm text-destructive">{errors.email.message}</p>
      )}

      {/* Message */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Enter your Message here..."
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      {errors.message && (
        <p className="text-sm text-destructive">{errors.message.message}</p>
      )}

      <Button
        type="submit"
        className="flex items-center max-w-[165px]"
        disabled={isSubmitting || isWaiting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Let's Talk
            <ArrowRightIcon size={20} />
          </>
        )}
      </Button>

      {isWaiting && (
        <div className="text-sm text-destructive">
          <p>
            You need to wait {waitTime} second{waitTime !== 1 && "s"} before
            sending another message.
          </p>
        </div>
      )}
    </form>
  );
};

export default Form;

