import images from "../../public";
import Image from "next/image";

const HomeBgImg = () => (
  <Image
    fill
    sizes="100vw"
    className="blur-sm"
    src={images.homeBg}
    alt="background image"
    style={{ objectFit: "cover" }}
  />
);

export default HomeBgImg;
