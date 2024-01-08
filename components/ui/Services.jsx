import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "UI/UX Design",
    description:
      "Shaping digital experiences through thoughtful and user-centric design. From wireframes to polished interfaces, I focus on creating visually appealing and intuitively navigable designs. Elevate your brand with engaging and user-friendly interfaces.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Bringing your ideas to life with custom mobile applications. I specialize in developing intuitive and feature-rich apps for various platforms. Whether it's iOS or Android, I create solutions that elevate user engagement and satisfaction.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Crafting dynamic and responsive websites tailored to your needs. From conceptualization to deployment, I ensure seamless user experiences. Additionally, I offer ongoing maintenance to keep your web presence optimized and up-to-date.",
    // " I design and build websites for corporate or individual clients. I work with colleagues and clients to understand website requirements and client needs. I write, tests, and debug code and applications.",
  },
];

const Services = () => {
  return (
    <section className="my-12 xl:my-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-20 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] xl:h-[300px] flex flex-col py-10 xl:pt-16 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-background dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 mt-10">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
