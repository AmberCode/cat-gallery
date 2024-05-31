import Image from "next/image";
import { imagePlaceHolder } from "../constants";

type ImageCardProps = {
  url: string;
};

export const ImageCard = ({ url }: ImageCardProps) => {
  return (
    <Image
      src={url}
      alt="cute cat"
      fill={true}
      objectFit="cover"
      quality={30}
      placeholder={"blur"}
      blurDataURL={imagePlaceHolder}
    />
  );
};
