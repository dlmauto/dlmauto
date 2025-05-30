import { PiPhoneFill } from "react-icons/pi";
import Container from "../../common/Container";
import { FaEnvelope, FaLocationPin } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="border-b-[1px] border-neutral-400 p-2">
      <Container className="flex flex-wrap justify-between items-end">
        <div>
          <div className="xl:text-6xl text-4xl flex gap-2">
            <div className="italic font-bold">
              <span className="text-sky-500">D</span>
              <span className="text-blue-800">L</span>
              <span className="text-red-600">M</span>
            </div>
            <div className="font-bold">Auto</div>
          </div>
          <div className="font-semibold xl:text-2xl text-lg">
            KFZ SERVICE & HANDEL
          </div>
        </div>

        <div className="xl:text-xl">
          <div>
            <PiPhoneFill className="inline-block mr-2" />
            0650-4848-456
          </div>
          <div>
            <FaLocationPin className="inline-block mr-2" />
            Bahnweg 20, 9131 Grafenstein
          </div>
          <div>
            <FaEnvelope className="inline-block mr-2" />
            dlmauto@gmx.at
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
