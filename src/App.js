import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {

  const navItems = [
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
    { name: "Resume" }
  ]

  const [categorySelected, setCategory] = useState(navItems[0].name)

  return (
    <>
      <Nav
        navItems={navItems}
        categorySelected={categorySelected}
        setCategory={setCategory}
      ></Nav>
      {categorySelected === "About" && <About />}
      {categorySelected === "Projects" && <Portfolio />}
      {categorySelected === "Contact" && <Contact />}
      {categorySelected === "Resume" && <Resume />}
      <Footer/>
    </>
  );
}

export default App;
