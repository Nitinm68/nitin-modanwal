import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/Nitin Developer Official Logo.png";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { m, AnimatePresence } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Works" },
  { path: "/education", label: "Education" },
  { path: "/services", label: "Services" },
  { path: "/achievements", label: "Achievements" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        /* NAVBAR */
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 80px);
          max-width: 1300px;
          height: 90px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--nav-bg);
          backdrop-filter: blur(14px);
          border-radius: 18px;
          border: 1px solid var(--border-light);
          z-index: 1000;
          transition: background 0.4s ease, border-color 0.4s ease;
        }

        .navbar.scrolled {
           background: var(--nav-scrolled);
           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .nav-logo img {
          height: 72px;
          margin-top: 8px;
        }

        .nav-links {
          display: flex;
          gap: 26px;
        }

        .nav-links a {
          position: relative;
          color: var(--text-main);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-btn {
          padding: 10px 22px;
          border-radius: 25px;
          background: linear-gradient(135deg, #8b5cf6, #22d3ee);
          color: #000;
          font-weight: 600;
          text-decoration: none;
        }
        
        .theme-toggle {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .theme-toggle:hover {
          background: var(--bg-card-hover);
          color: var(--primary);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .menu-btn {
          display: none;
          font-size: 28px;
          color: var(--text-main);
          cursor: pointer;
        }

        /* MOBILE MENU OVERLAY */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          z-index: 999;
          display: ${menuOpen ? "block" : "none"};
        }

        /* MOBILE SLIDE MENU (LEFT) */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100vh;
          background: var(--bg-main);
          border-right: 1px solid var(--border-light);
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          z-index: 1001;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .close-btn {
          font-size: 26px;
          color: var(--text-main);
          cursor: pointer;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 22px;
          flex: 1;
        }

        .mobile-links a {
          color: var(--text-main);
          font-size: 18px;
          text-decoration: none;
        }

        .mobile-cta {
          margin-top: auto;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav-links,
          .nav-btn {
            display: none;
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <m.header 
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Link to="/" className="nav-logo">
          <m.img 
            src={logo} 
            alt="Nitin Developer" 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          />
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path}>
                {item.label}
                {isActive && (
                  <m.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "var(--primary)",
                      borderRadius: 2
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="nav-right">
          <LanguageSelector />
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          
          <Link to="/contact" className="nav-btn">
            Let’s Connect
          </Link>

          <m.div className="menu-btn" onClick={() => setMenuOpen(true)} whileTap={{ scale: 0.9 }}>
            ☰
          </m.div>
        </div>
      </m.header>

      {/* OVERLAY & MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <m.div 
              className="mobile-overlay" 
              onClick={() => setMenuOpen(false)} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "block" }}
            />
            <m.aside 
              className="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="mobile-header">
                <img src={logo} alt="logo" height="36" />
                <m.span className="close-btn" onClick={() => setMenuOpen(false)} whileTap={{ scale: 0.9 }}>
                  ✕
                </m.span>
              </div>

              <div className="mobile-links">
                {navItems.map((item) => (
                  <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                ))}
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
              </div>

              <div className="mobile-cta">
                <Link to="/contact" className="nav-btn" onClick={() => setMenuOpen(false)}>
                  Let’s Connect
                </Link>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
