import Map from "./Map";
import Container from "../../common/Container";
import WorkHours from "./WorkHours";
import Contact from "../../common/Contact";
import Logo from "../../common/Logo";

const Info = () => {
  return (
    <section>
      <Container className="grid xl:grid-cols-2 gap-4">
        <div className="grid gap-2 ">
          <div>
            <h2>Öffnungszeiten</h2>
            <WorkHours />
          </div>

          <div>
            <h2>Kontakt</h2>
            <Contact className="text-lg decoration-none" />
          </div>

          <Logo className="self-end  " />
        </div>

        <Map />
      </Container>
    </section>
  );
};

export default Info;
