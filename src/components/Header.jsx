import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "./Dropdown";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Opening menu
      setIsMenuOpen(true);
      setIsMenuAnimating(true);
    } else {
      // Closing menu - keep animating state until animation completes
      setIsMenuOpen(false);
      // Delay removing the animating state by the exit animation duration (1000ms)
      setTimeout(() => {
        setIsMenuAnimating(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsMenuAnimating(false);
      }, 1000);
    }

    // If not on home page, navigate to home page first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerHeight = window.innerWidth >= 1024 ? 80 : 72;
          if (window.lenis) {
            window.lenis.scrollTo(section, {
              offset: -headerHeight,
              immediate: true,
              duration: 0,
              force: true
            });
          } else {
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'instant'
            });
          }
        }
      }, 100);
      return;
    }

    // Already on home page, just scroll
    const section = document.getElementById(sectionId);
    if (section) {
      // Get header height for offset (mobile: 4.5rem, desktop: 5rem)
      const headerHeight = window.innerWidth >= 1024 ? 80 : 72;

      // Calculate position with offset
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      // Use Lenis scrolling if available, otherwise use native scrolling
      if (window.lenis) {
        // For Lenis, we need to scroll to the element directly
        // Adding duration: 0 and force: true to ensure immediate jump
        window.lenis.scrollTo(section, {
          offset: -headerHeight,
          immediate: true,
          duration: 0,
          force: true
        });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'instant'
        });
      }
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full ${isMenuAnimating ? 'bg-[#dcfebc]' : 'bg-white'} z-50 transition-all duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="w-full h-18 lg:h-20 border-b flex justify-between items-center ">
          <Link to="/">
            <svg
              viewBox="50 -10 500 100"
              className="items-center p-4 h-20 md:h-24"
            >
              <defs>
                <filter id="glitch">
                  <feTurbulence baseFrequency="0.8" numOctaves="1" result="t" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="t"
                    scale="10"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
                <clipPath id="circleClip">
                  <circle cx="30" cy="45" r="30" />
                </clipPath>
              </defs>

              <g filter="url(#glitch)" transform="translate(60, 0)">
                <text
                  x="0"
                  y="55%"
                  fontSize="64"
                  textAnchor="start"
                  fill="currentColor"
                >
                  Design<tspan fill="red">2</tspan>Code
                </text>
              </g>
            </svg>
          </Link>
          <div className="flex items-center gap-8 mr-4 text-xl font-mono">
            <div
              className="hidden font-normal text-lg lg:block relative overflow-hidden group cursor-pointer"
              onClick={() => scrollToSection('testimonials')}
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Event Details
              </span>
            </div>

            <div
              className="hidden font-normal text-lg lg:block relative overflow-hidden group cursor-pointer"
              onClick={() => scrollToSection('ourgoals')}
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Evaluation Committee
              </span>
            </div>
            <Link
              to="/register"
              className="hidden py-2 px-4 rounded-lg font-normal text-lg md:inline-block relative overflow-hidden group bg-black text-white hover:bg-white hover:text-black"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Register Now!
              </span>
            </Link>
            <div
              className="h-10 w-10 cursor-pointer lg:hidden text-black lg:text-black"
              onClick={toggleMenu}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M4 8H20M4 16H12"
                  stroke="currentColor"
                  strokeWidth="0.696"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Nav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;