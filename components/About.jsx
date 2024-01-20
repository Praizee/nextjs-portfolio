import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  MapPin,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Stephen Adeniji" },
  { icon: <PhoneCall size={20} />, text: "+234 902 892 3853" },
  { icon: <MailIcon size={20} />, text: "adeolaastephen@gmail.com" },
  { icon: <MapPin size={20} />, text: "Lagos, Nigeria" },
  { icon: <GraduationCap size={20} />, text: "B.Sc in Computer Science" },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        school: "Edexcel University, Benin",
        qualification: "Bachelor of Science",
        years: "2019 - 2022",
      },
      {
        school: "Towemo College, Lagos",
        qualification: "S.S.C.E",
        years: "2013 - 2019",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Voltwolf Limited",
        role: "React Developer",
        years: "Jan 2024 - Present",
      },
      {
        company: "Voltwolf Limited",
        role: "Frontend Intern",
        years: "Aug - Dec.  2023",
      },
      {
        company: "ICT Networld",
        role: "Frontend Intern",
        years: "Aug - Nov. 2022",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        title: "Markup Languages",
        list: "HTML",
      },
      {
        title: "Styles",
        list: "CSS3, Bootstrap, Tailwind CSS",
      },
      {
        title: "Programming Languages",
        list: "JavaScript, Typescript",
      },
      {
        title: "Libraries",
        list: "React.js",
      },
      {
        title: "Frameworks",
        list: "Next.js",
      },
      {
        title: "Version Control",
        list: "Git, GitHub ",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
        title: "VS Code",
      },
      {
        imgPath: "/about/figma.svg",
        title: "Figma",
      },
      // {
      //   imgPath: "/about/notion.svg",
      // },
      // {
      //   imgPath: "/about/wordpress.svg",
      // },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 pt-36 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex  flex-1 relative">
            <DevImg
              containerStyles=" w-[505px] h-[505px] bg-no-repeat relative"
              // bg-about_shape_light dark:bg-about_shape_dark
              // imgSrc="https://stephen-adeniji.vercel.app/public/opengraph-image.png"
              imgSrc="/developer-2.svg"
              imgAlt="About Dev Image"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="Personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="Personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="Qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Tab */}
                <TabsContent value="Personal">
                  <div className="text-center xl:text-left">
                    {/* <h3 className="h3 mb-4">Intro</h3> */}
                    {/* <p>
                      I'm a Web Developer👨‍💻 who specializes in building
                      responsive websites and web app. I am currently working a
                      web developer at Voltwolf Limited. I am also a Tech
                      enthusiast with a creative mind. In my free time I like to
                      read📖, researching about emerging technogies, play
                      games🎮 and watch movies🎬
                    </p> */}
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Hello, I'm Stephen Adeniji, a front-end developer based in
                      Lagos, Nigeria. With a B.Sc in Computer Science, I bring a
                      strong foundation in both theoretical and practical
                      aspects of software development. My journey in the tech
                      world is fueled by a constant desire to learn and create.
                    </p>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      In my free time I like to read📖, research about emerging
                      technogies, play games🎮 and watch movies🎬. Feel free to
                      explore my work and connect with me. Looking forward to
                      collaborating and sharing my web development journey with
                      you! As well as bring my passion for coding and problem
                      solving to a dynamic and innovative team! You can reach me
                      at{" "}
                      <a href="https://wa.link/wk4gts" className="text-primary">
                        +234 902 892 3853
                      </a>{" "}
                      or{" "}
                      <a
                        href="mailto:adeolaastephen@gmail.com."
                        className="text-primary"
                      >
                        adeolaastephen@gmail.com
                      </a>{" "}
                      .
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div>Languages</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, Yoruba</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications Tab */}
                <TabsContent value="Qualifications">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience and Education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* Experience List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-px bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4>
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* Education List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { school, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-px bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {school}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="Skills">
                  <div className="text-center xl:text-left">
                    {/* <h4 className="h3 mb-8">Tools I use Daily</h4> */}
                    <h4 className="h3 mb-8">Experience Tools</h4>
                    <div className="mb-16">
                      {/* Skills */}
                      <h4 className="text-xl font-semibold mb-2">
                        Skills/Technologies
                      </h4>
                      <div className="border-b border-border mb-4"></div>

                      {/* Skill List */}
                      <div>
                        {getData(skillsData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 xl:w-auto text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium xl:flex gap-x-2">
                                  <p className="font-bold text-primary">
                                    {item.title}:
                                  </p>
                                  <p className="mb-4 xl:mb-2">{item.list}</p>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-4xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "Tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt={item.title}
                                  title={item.title}
                                  priority
                                />
                                <p className="text-xs mt-1 text-primary">
                                  {item.title}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
