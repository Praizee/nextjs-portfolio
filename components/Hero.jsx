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
              <h1 className="h1">Hi there! 👋🏽</h1>
              <h2 className="h2 text-2xl">I'm Stephen Adeniji,</h2>
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
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years of Experience"
            />

            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={4}
              endCountText="k"
              badgeText="Completed projects"
            />

            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[50%] -right-10"
              icon={<RiTeamFill />}
              endCountNum={3}
              endCountText="k"
              badgeText="Teams satisfied"
            />

            {/* Image */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat relative -top-1 -right-2">
              <DevImg
                imgSrc="/about/developer.png"
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
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
