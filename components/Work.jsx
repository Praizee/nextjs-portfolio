"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Required Modules
import { Pagination } from "swiper/modules";

// Components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/3.png",
    category: "next.js",
    name: "Financial Dashboard",
    description:
      "Effortlessly manage invoices and customers with our Financial Dashboard. It provides a seamless experience for enhancing your financial workflow",
    link: "https://nextjs-dashboard-eight-zeta-22.vercel.app/",
    github: "https://github.com/Praizee/nextjs-dashboard",
  },
  {
    image: "/work/4.png",
    category: "react.js, Typescript",
    name: "Payment Wallet",
    description:
      "Experience convenience at your fingertips. Seamlessly make purchases, pay bills and more—all within a secure and user-friendly platform.",
    link: "https://digital-payment-wallett.netlify.app/",
    github: "https://github.com/Praizee/Digital-Payment-Wallett",
  },
  {
    image: "/work/1.png",
    category: "react.js",
    name: "Real-time Chat App",
    description:
      "Engage in seamless real-time conversations with our React-based chat app, powered by Appwrite for secure and efficient messaging.",
    link: "https://realtime-chat-app-01.netlify.app/",
    github: "#",
  },
  {
    image: "/work/2.png",
    category: "html/css",
    name: "Movie Website",
    description:
      "Experience a cinematic journey with our sleek and user-friendly movie website, featuring the latest releases and popular classics.",
    link: "https://filmlane01.netlify.app/",
    github: "#",
  },
  {
    image: "/work/3.png",
    category: "html/css/bootstrap",
    name: "App Landing Page",
    description:
      "A stunning, visually appealing app landing page that converts visitors to users. Try it today!",
    link: "https://praizee.github.io/App-Landing-Page/",
    github: "https://github.com/Praizee/App-Landing-Page",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="items-center max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="subtitle mb-8">Here are a few of my recent projects</p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="xl:h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index} className="pb-12">
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
