import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin, github, email, call, buymecoffee } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
    style={{ height: '90px' }}
      className={`${
        styles.paddingX
      } w-full flex py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Farshid &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {nav.id === 'cv' ? (
                 <a
                 href="https://elm4mj2xqjrmrpac.public.blob.vercel-storage.com/Farshid-CV.pdf"
                 target="_blank" // Open in a new tab
                 rel="noopener noreferrer"
                 //download="Farshid-CV.pdf"
                //  onClick={(e) => {
                //    e.preventDefault();
                //    fetch('./Farshid-CV.pdf')
                //      .then(response => response.blob())
                //      .then(blob => {
                //        const fileURL = window.URL.createObjectURL(blob);
                //        const a = document.createElement('a');
                //        a.href = fileURL;
                //        a.download = 'Farshid-CV.pdf';
                //        a.click();
                //      });
                //  }}
               >
                 {nav.title}
               </a>
                  ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
            </li>
          ))}
        </ul>  
      <div>
      <div>  
      </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div style={{ paddingLeft: 'inherit' }}>
        <div className="flex flex-col" style={{
              gap: 25
            }}>
          <a href="https://www.linkedin.com/in/farshids/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-9 h-9 object-contain" />
          </a>
          <a href="https://github.com/farshidnz" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="w-9 h-9 object-contain" />
          </a>
          <a href="mailto:shokoohi.farshid@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="email" className="w-9 h-9 object-contain" />
          </a>
          <a href="https://www.buymeacoffee.com/farshidnz" target="_blank" rel="noopener noreferrer">
            <img src={buymecoffee} alt="buymecoffee" className="w-9 h-9 object-contain" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
