import Gallery from "./sections/gallery/Gallery";
import Info from "./sections/info/Info";

import Nav from "./sections/nav/Nav";
import Services from "./sections/services/Services";

const App = () => {
  return (
    <>
      <Nav />

      <Gallery />
      <Services />
      <Info />
      <footer className="text-center text-sm ">
        Developed by{" "}
        <a
          className="underline"
          href="https://matejabogdanovic.github.io/matejabogdanovic/"
        >
          Mateja Bogdanović
        </a>
      </footer>
    </>
  );
};

export default App;
