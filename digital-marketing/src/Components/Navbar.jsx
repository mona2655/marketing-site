import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/logo-bg.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // ✅ Fix: Get current route
  const navigate = useNavigate();

  // ✅ Set dynamic link color: White on Home page, Gray elsewhere
  const linkClass = location.pathname === "/" ? "text-white" : "text-gray-900";

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Sticky Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items
  const navitems = [
    { link: "Home", path: "/" },
    { link: "Service", path: "/services" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/product" },
    { link: "Testimonial", path: "/testomonial" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-white duration-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-auto inline-block items-center mix-blend-multiply"
            />
            <span className={linkClass}>TechVivid</span>
          </Link>

          {/* Nav items for large screens */}
          <ul className="md:flex space-x-12 hidden">
            {navitems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className={`block text-base hover:text-gray-400 transition ${linkClass}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons for large screens */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button onClick={() => navigate("/login")} className="text-brandPrimary hover:text-gray-900">
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDgrey"
            >
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDgrey focus:outline-none">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav items */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navitems.map(({ link, path }) => (
            <Link key={path} to={path} className="block text-base text-white hover:text-gray-300">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
