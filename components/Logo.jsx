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
        className="w-[65px] h-auto"
      />
    </Link>
  );
};

export default Logo;
