import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc, imgAlt }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority quality={90} alt={imgAlt} />
    </div>
  );
};

export default DevImg;
