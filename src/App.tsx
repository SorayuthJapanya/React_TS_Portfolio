import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Portfolio } from "./components/sections/Portfolio";
import { Packages } from "./components/sections/Packages";
import { Services } from "./components/sections/Services";

const App = () => {
  return (
    <Layout title="Code Spiral">
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
    </Layout>
  );
};

export default App;
