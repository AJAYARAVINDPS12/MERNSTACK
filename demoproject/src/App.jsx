import About from "./FunctionComponent/About";
import Constact from "./FunctionComponent/Contact";
import Gallery from "./FunctionComponent/Gallery";
import Home from "./FunctionComponent/Home";
import Navbar from "./FunctionComponent/Navbar";


function App() {
  return (
    <>
    <Navbar />
    <section>
      <About/>
      <Gallery/>
      <Home/>
      <Constact/>
    </section>
    </>
  );
}

export default App;