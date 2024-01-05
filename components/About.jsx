import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Stephen Adeniji" },
  { icon: <PhoneCall size={20} />, text: "+2349028923853" },
  { icon: <MailIcon size={20} />, text: "adeolaastephen@gmail.com" },
  { icon: <Calendar size={20} />, text: "14 July, 2003" },
  { icon: <GraduationCap size={20} />, text: "B.Sc in Computer Science" },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        School: "Edexcel Uni",
        Qualification: "Bachelor of Science",
        Years: "2019 - 2022",
      },
      {
        School: "Towemo College",
        Qualification: "High School Diploma",
        Years: "2013 - 2019",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Voltwolf Limited",
        Position: "React Developer",
        Years: "2019 - 2022",
      },
      {
        Company: "Voltwolf Limited",
        Position: "Frontend Intern",
        Years: "2019 - 2022",
      },
      {
        Company: "ICT NetWorld",
        Position: "Frontend Intern",
        Years: "2019 - 2022",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Bootstrap, Javascript",
      },
      {
        name: "Tailwind, React.js, Typescript ",
      },
      {
        name: "NExt.js, Git/GitHub",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
            {/* Tabs */}
            <div className="flex-1">
              <Tabs defaultValue="personal">
                <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                  <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-[162px] xl:w-auto"
                    value="qualifications"
                  >
                    Qualifications
                  </TabsTrigger>
                  <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                    Skills
                  </TabsTrigger>
                </TabsList>
                {/* Tab Content */}
                <div className="text-lg mt-12 xl:mt-8">
                  <TabsContent value="personal">
                    <h3>Specialist in quality product delivery</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Dolor
                    </p>
                  </TabsContent>
                  <TabsContent value="qualifications">
                    Qualification Info
                  </TabsContent>
                  <TabsContent value="skills">Skills Info</TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
