import { useState } from "react";
import Container from "../../common/Container";
import { BiArrowBack } from "react-icons/bi";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageModules = import.meta.glob("../../gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  });

  const data = Object.values(imageModules) as string[];
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  return (
    <div className="bg-black overflow-hidden">
      <Container className="flex items-center justify-center text-white text-xl xl:text-3xl xl:h-[600px] h-[300px] relative w-full  ">
        <div className="w-full h-full flex items-center justify-center  ">
          <img
            src={data[(data.length + currentIndex - 1) % data.length]}
            className=" opacity-20 "
            alt=""
          />

          <img
            src={data[currentIndex]}
            className="cursor-pointer"
            alt=""
            onClick={() => setShowOverlay(true)}
          />
          {showOverlay && (
            <div
              onClick={() => setShowOverlay(false)}
              className="z-10 fixed top-0 right-0 w-full h-screen bg-black/50 cursor-pointer  flex items-center justify-center overflow-y-auto"
            >
              <img src={data[currentIndex]} className="max-h-[80dvh]" alt="" />
            </div>
          )}
          <img
            src={data[(currentIndex + 2) % data.length]}
            className="opacity-20  "
            alt=""
          />
        </div>

        <button
          onClick={() => {
            setCurrentIndex((prev) => (data.length + prev - 1) % data.length);
          }}
          className="flex items-center justify-start p-2 flex-1 absolute left-0  w-1/6 h-full bg-gradient-to-r from-black/80 to-transparent group"
        >
          <BiArrowBack className=" group-active:scale-95" />
        </button>
        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
          }}
          className="flex items-center justify-end p-2 flex-1 absolute right-0 w-1/6  h-full bg-gradient-to-l from-black/80 to-transparent group"
        >
          <BiArrowBack className="rotate-180 group-active:scale-95" />
        </button>
      </Container>
    </div>
  );
};

export default Gallery;
