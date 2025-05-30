import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavFot/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./NavFot/Footer";
import ContactUs from "./Component/Contact/ContactUs";
import Services from "./Component/Services/Services";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
