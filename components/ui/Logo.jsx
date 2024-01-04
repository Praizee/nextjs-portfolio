import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="dark:fill-primary"
        src="/Logo.svg"
        width={54}
        height={54}
        priority
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
