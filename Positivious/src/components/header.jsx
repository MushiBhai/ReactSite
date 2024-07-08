import React from 'react';
import { Link } from 'react-scroll';
export default function header() {
  return (
    <header>
      <nav className="flex gap-8 justify-between items-center right-[8vw] left-[8vw] top-14 absolute">
        <a href="/">
          <img
            className="h-[36px] cursor-pointer w-[219px]"
            src="./images/Logo.png"
            alt="logo"
          />
        </a>
        <div id="links">
          <ul className="flex gap-12 items-center text-[20px] font-[450] scroll-smooth transition-all cursor-pointer duration-100">
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <li className="active:scale-90 transition-all duration-150">
                Services
              </li>
            </Link>
            <Link
              to="CaseStudies"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              <li className="active:scale-90 transition-all duration-150">
                Case Studies
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="Working"
            >
              <li className="active:scale-90 transition-all duration-150">
                Working
              </li>
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to="teams"
            >
              <li className="active:scale-90 transition-all duration-150">
                Team
              </li>
            </Link>
            <a href="/">
              <li className="active:scale-90 transition-all duration-150">
                Testimonials
              </li>
            </a>
            <button className="border-[1px] active:scale-90 transition-all duration-150 border-black py-4 rounded-xl px-10">
              Request a Quote
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}
