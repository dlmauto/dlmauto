import Contact from "../../common/Contact";
import Container from "../../common/Container";
import Logo from "../../common/Logo";

const Nav = () => {
  return (
    <nav className="border-b-[1px] border-neutral-400 p-2 ">
      <Container className="flex flex-wrap justify-between items-end">
        <Logo />
        <Contact />
      </Container>
    </nav>
  );
};

export default Nav;
