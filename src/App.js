import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
// import { BrowserRouter , Route ,Routes  } from "react-router-dom";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   
    <div className="App"
      style={{
        background: darkMode ? 'black' : "" ,
        color :darkMode?'white' : ""
      }}
    >
      {/* <BrowserRouter> */}
      <Navbar/>
      <Intro/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
           {/* <Routes>
             <Route path="/home" element={<Intro/>}/>
             <Route path="/services" element={<Services/>}/>
             <Route path="/skills" element={<Skills/>}/>
             <Route path="/portfolio" element={<Portfolio/>}/>
             <Route path="/contact" element={<Contact/>}/>
           

   
      </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  
  );
}

export default App;
