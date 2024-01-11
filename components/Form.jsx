"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form
      // action="https://formsubmit.co/adeolaastephen@gmail.com"
      action="https://formsubmit.co/d3088beca64d6b91da3077fa08a14023"
      method="POST"
      className="flex flex-col gap-y-4"
    >
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_autoresponse"
        value="Hello, Thank you for contacting me. I've received your message and will be in touch shortly. In the meantime, feel free to explore my portfolio to see my latest work. Best regards, Stephen"
      />
      {/* <input type="hidden" name="_template" value="basic" /> */}
      {/* <input type="hidden" name="_template" value="box" /> */}

      {/* Input */}
      {/* Name */}
      <div className="relative flex items-center">
        <Input type="text" name="Name" id="name" placeholder="Name" required />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Email */}
      <div className="relative flex items-center">
        <Input
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Message */}
      <div className="relative flex items-center">
        <Textarea
          name="Message"
          placeholder="Enter your Message here... "
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button type="submit" className="flex items-center max-w-[165px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
