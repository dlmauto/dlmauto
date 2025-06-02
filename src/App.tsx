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
    </>
  );
};

export default App;
