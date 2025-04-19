import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>

      <Navbar />
      <Hero />
      <Portfolio />
    </div>
  );
}

export default App;
