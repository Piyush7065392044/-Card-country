import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/ui/Navbar";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Country from "./pages/contury";
import Footer from "./component/ui/Footer";
import ErrorPage from "./component/error/error";


const App = () => {
  return (
  
  <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
          {/* error page  */}
            <Route path="/error" element={< ErrorPage />} />
      
        
      </Routes>

      <Footer/>
  </>
 
  );
};

export default App;
