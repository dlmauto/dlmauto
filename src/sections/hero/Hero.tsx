import { GiCarWheel } from "react-icons/gi";
import Container from "../../common/Container";
import { FaOilCan, FaScrewdriverWrench } from "react-icons/fa6";
import { RiMoneyEuroCircleFill } from "react-icons/ri";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="p-2">
      <Container className="grid xl:grid-cols-4 grid-cols-1  gap-4 ">
        <HeroCard text="Reifen Montage" icon={<GiCarWheel />} />
        <HeroCard text="Öl Wechsel" icon={<FaOilCan />} />
        <HeroCard
          text="Service alle Fahrzeuge"
          icon={<FaScrewdriverWrench className="text-5xl" />}
        />
        <HeroCard text="An-und Verkauf" icon={<RiMoneyEuroCircleFill />} />
      </Container>
    </div>
  );
};

export default Hero;
