import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Services from './Components/Services';
import Testomonial from './Components/Testomonial';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Cookie from "./Components/Cookie";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/testomonial" element={<Testomonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
      <Cookie/>
      <Footer />
    </Router>
  );
}

export default App;
