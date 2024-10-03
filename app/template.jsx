"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";
import AnimatedCursor from "react-animated-cursor";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>

      <AnimatedCursor
        // showSystemCursor={true}
        innerSize={8}
        outerSize={35}
        color="30, 167, 255"
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "hsl(var(--primary))",
        }}
        outerStyle={{
          border: "3px solid hsl(var(--primary))",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      {/* <div className="h-[4000px]"></div> */}
    </>
  );
};

export default Template;
