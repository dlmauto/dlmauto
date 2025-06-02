import { FaEnvelope } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneFill } from "react-icons/pi";

const Contact = ({
  className = "xl:text-xl underline-offset-2 underline",
}: {
  className?: string;
}) => {
  return (
    <div className={className}>
      <a href="tel:06504848456" className="block">
        <PiPhoneFill className="inline-block mr-2 text-red-600" />
        0650-4848-456
      </a>
      <a
        href="https://www.google.com/maps/search/46.62022448430154,+14.447911741640713"
        target="_blank"
        className="block"
      >
        <HiLocationMarker className="inline-block mr-2 text-red-600" />
        Bahnweg 20, 9131 Grafenstein
      </a>
      <a href="mailto:dlmauto@gmx.at" className="block">
        <FaEnvelope className="inline-block mr-2 text-red-600" />
        dlmauto@gmx.at
      </a>
    </div>
  );
};

export default Contact;
