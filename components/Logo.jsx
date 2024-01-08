import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/Logo.png"
        width={65}
        height={65}
        priority
        alt="Logo"
        // className="w-max h-max"
      />
    </Link>
  );
};

export default Logo;
