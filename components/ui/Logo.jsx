import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/Logo.png" width={65} height={65} priority alt="Logo" />
    </Link>
  );
};

export default Logo;
