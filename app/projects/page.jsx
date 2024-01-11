"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

// You are attempting to export "metadata" from a component marked with "use client", which is disallowed. Either remove the export, or the "use client" directive. Read more: https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive

// export const metadata = {
//   title: "Projects",
//   description: "Projects Page",
// };

const projectData = [
  {
    image: "/work/car-hub.png",
    category: "next.js",
    // gsap
    name: "Car Hub - Car Showcase",
    description:
      "Lorem ipsum dolor sit amet rebum magna dolores blandit ea et et duo gubergren diam eirmod invidunt iusto et in",
    link: "https://car-showcase-app-seven.vercel.app/",
    github: "https://github.com/Praizee/car-showcase-app",
  },
  {
    image: "/work/financial-dashboard.png",
    category: "next.js",
    // gsap
    name: "Financial Dashboard",
    description:
      "Effortlessly manage invoices and customers with our Financial Dashboard. Built on Next.js, it provides a seamless experience for creating, editing, and deleting invoices, enhancing your financial workflow",
    link: "https://nextjs-dashboard-eight-zeta-22.vercel.app/",
    github: "https://github.com/Praizee/nextjs-dashboard",
  },
  {
    image: "/work/payment-wallet.png",
    category: "react.js, Typescript",
    name: "Payment Wallet",
    description:
      "Experience convenience at your fingertips with our E-Payment Wallet. Seamlessly buy data/airtime, pay bills, subscribe to cable services, and transfer funds—all within a secure and user-friendly platform. Simplify your financial transactions and enjoy the ease of managing your digital payments.",
    link: "https://digital-payment-wallett.netlify.app/",
    github: "https://github.com/Praizee/Digital-Payment-Wallett",
  },
  {
    image: "/work/chat-app.png",
    category: "react.js",
    name: "Real-time Chat App",
    description:
      "Engage in seamless real-time conversations with our React-based chat app, powered by Appwrite for secure and efficient messaging.",
    link: "https://realtime-chat-app-01.netlify.app/",
    github: "#",
  },
  {
    image: "/work/filmlane.png",
    category: "html/css",
    name: "Movie Website",
    description:
      "Experience a cinematic journey with our sleek and user-friendly movie website, featuring the latest releases and popular classics.",
    link: "https://filmlane01.netlify.app/",
    github: "#",
  },
  {
    image: "/work/app-land.png",
    category: "html/css/bootstrap",
    name: "App Landing Page",
    description:
      "A stunning, visually appealing app landing page that converts visitors to users. Try it today!",
    link: "https://praizee.github.io/App-Landing-Page/",
    github: "https://github.com/Praizee/App-Landing-Page",
  },
];

// Remove duplicated category
// console.log(projectData.map((item) => item.category));
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, SetCategory] = useState("all projects");
  // console.log(category);

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  // console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* Tab List */}
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => SetCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tabs content */}
          <div className="text-lg h-full xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
