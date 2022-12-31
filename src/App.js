import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/portfolio";
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
      {categorySelected === "About" && <About/>}
      {categorySelected === "Projects" && <Portfolio/>}
      {categorySelected === "About" && <About/>}
      {categorySelected === "About" && <About/>}
    </>
  );
}

export default App;
