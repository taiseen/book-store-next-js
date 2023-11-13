import Image from "next/image";

const BookImg = ({ img, title }) => {
  return (
    <div className="mb-2 h-13">
      <Image
        src={img}
        alt={title}
        width={150}
        height={100}
        priority={true}
        className="rounded-md"
        style={{ height: "200px", width: "auto" }}
      />
    </div>
  );
};

export default BookImg;
