import {
  GanttChartSquare,
  Blocks,
  Gem,
  Rocket,
  Code,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const servicesData = [
  {
    icon: <Globe size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Crafting dynamic and responsive websites tailored to your needs. From conceptualization to deployment, I ensure seamless user experiences. Additionally, I offer ongoing maintenance to keep your web presence optimized and up-to-date.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "Bringing your ideas to life with custom mobile applications. I'm focused on developing intuitive and feature-rich apps for various platforms. Whether it's iOS or Android, I create solutions that elevate user engagement and satisfaction.",
  },
  {
    icon: <Rocket size={72} strokeWidth={0.8} />,
    title: "Performance Optimization",
    description:
      "Enhance your website's speed and user experience through targeted UI improvements and performance enhancements. I focus on creating smoother, more responsive interactions that keep users engaged and satisfied with your site.",
    // "Boost your site's visibility, search engine rankings, speed, and user experience with expert SEO strategies, performance enhancements, and UI improvements for a smoother and more engaging experience.",
    // "Enhancing your website’s visibility, speed, and usability with expert SEO strategies, performance optimization, and UI improvements. I focus on improving search engine rankings, reducing load times, and fixing or refining your user interface for a faster, smoother, and more engaging experience.",
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
