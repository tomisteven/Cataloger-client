import "./App.css";
import "./Components/Header.js";
import Header from "./Components/Header.js";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
