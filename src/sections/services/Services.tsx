import { GiCarWheel } from "react-icons/gi";
import Container from "../../common/Container";
import { FaOilCan, FaScrewdriverWrench } from "react-icons/fa6";
import { RiMoneyEuroCircleFill } from "react-icons/ri";

const ServicesCard = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <div className=" grid justify-items-center items-center rounded-xl px-4 text-6xl gap-2">
      <div>{icon}</div>
      <span className="text-lg text-center">{text}</span>
    </div>
  );
};

const Services = () => {
  return (
    <section className="xl:px-0 px-2">
      <Container className="grid xl:grid-cols-4 grid-cols-2  gap-4 ">
        <ServicesCard text="Reifen Montage" icon={<GiCarWheel />} />
        <ServicesCard text="Öl Wechsel" icon={<FaOilCan />} />
        <ServicesCard
          text="Service alle Fahrzeuge"
          icon={<FaScrewdriverWrench className="text-5xl" />}
        />
        <ServicesCard text="An-und Verkauf" icon={<RiMoneyEuroCircleFill />} />
      </Container>
    </section>
  );
};

export default Services;
