import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-foreground text-[25px] hover:text-primary transition-all duration-200"
          />
          <div className="text-muted-foreground">
            Copyright &copy; {currentYear} All Rights Reserved
          </div>
          <div className="text-muted-foreground">
            Made with 💙 by{" "}
            <Link
              href="https://github.com/Praizee"
              className="hover:text-primary transition duration-300"
            >
              Stephen Adeniji
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

