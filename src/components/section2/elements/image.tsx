import Image from "next/image";

export const ImageComponent = (src: string) => {
  return (
    <Image
      className="absolute"
      alt="project logo"
      src={src}
      fill={true}
      style={{ objectFit: "contain", objectPosition: "center" }}
      priority={true}
    />
  );
};
