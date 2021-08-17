import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutImage1 from "./images/Frame 19.png"
import aboutImage2 from "./images/download.png"
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutImage1} title='Comes with all you need in your life' button='Get the App now'/>
      <Presentation/>
      <About image={aboutImage2} title='Download and Get the App mow' button='Download'/>
      <Contact/>
    </div>
  );
}

export default App;
