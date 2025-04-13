"use client";

import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = currentHours >= 12 ? "PM" : "AM";
      const formattedHours = currentHours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };

    updateTime(); // Initial update
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        {/* Text & Image */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello 👋🏽
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work together!</h1>
            <p className="subtitle max-w-[400px]">
              Feel free to reach out to me for collaboration, inquiries, or just
              to say hi. <br /> I look forward to hearing from you!
            </p>
          </div>
          {/* Image */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div>
          {/* Info text & Form*/}
          <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            {/* Info Text */}
            <div className="flex flex-col gap-y-4 xl:gap-y-10 mb-12 xl:mb-24 text-base xl:text-lg">
              {/* Phone */}
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>
                  <Link
                    href="https://wa.link/wk4gts"
                    className="hover:text-primary transition duration-300"
                  >
                    +234 902 892 3853
                  </Link>
                </div>
              </div>
              {/* Mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>
                  <Link
                    href="mailto:adeolaastephen@gmail.com"
                    className="hover:text-primary transition duration-300"
                  >
                    adeolaastephen@gmail.com
                  </Link>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>Lagos, Nigeria</div>
              </div>
              {/* Time */}
              <div className="flex items-center gap-x-8">
                <Clock size={18} className="text-primary" />
                <div>{currentTime}</div>
              </div>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// Contact Feel free to reach out to me for collaboration or inquiries. You
//       can contact me via email at [YourEmail@example.com] or connect with me on
//       [LinkedIn/Twitter/GitHub]. I look forward to hearing from you!

