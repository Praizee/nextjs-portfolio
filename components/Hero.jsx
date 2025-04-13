"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Badge from "./Badge";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero  bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="space-y-4">
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Front End Web Developer
              </div>
              <h2 className="h1">Hi there! 👋🏽</h2>
              <h1 className="h2 text-2xl">I'm Stephen Adeniji,</h1>
              <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                A passionate front-end developer dedicated to creating immersive
                and user-friendly web experiences. With a keen eye for design
                and a love for coding, I bring creativity and precision to every
                project.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col mt-10 gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              {/* <Link
                // href="https://1drv.ms/b/c/0d72ec7496d1b5af/Ea-10ZZ07HIggA3MWAAAAAABfZ8G0TSIlHh-PJWfbP_tYQ?e=O7Gm3Y"
                href="https://docs.google.com/document/d/1jcShwi6kIsihQ1aFXs85n65K07yycl1Kel53FiCy2bo/edit?usp=sharing"
                // download="Stephen Adeniji Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link> */}

              <Button
                onClick={() =>
                  // to open in a new tab without having this 'verbose' url when hovered (with link) 🥲🙂
                  window.open(
                    "https://docs.google.com/document/d/1jcShwi6kIsihQ1aFXs85n65K07yycl1Kel53FiCy2bo/edit?usp=sharing",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                variant="secondary"
                className="gap-x-2"
              >
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all duration-200"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              // endCountText="+"
              badgeText="Years of Experience"
            />

            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={8}
              endCountText="+"
              // endCountText="k"
              badgeText="Completed projects"
            />

            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[50%] -right-10"
              icon={<RiTeamFill />}
              endCountNum={5}
              endCountText="+"
              // endCountText="k"
              badgeText="Teams satisfied"
            />

            {/* Image */}
            <div className=" w-[550px] h-[550px] bg-no-repeat relative -top-1 -right-2">
              {/* bg-hero_shape2_light dark:bg-hero_shape2_dark */}
              <DevImg
                imgSrc="/developer-2.svg"
                imgAlt="Hero Dev Image"
                containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                // bg-hero_shape
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

