import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/animations/Preloader";
import WhatsAppFloatingBtn from "./components/WhatsAppFloatingBtn";

export default function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <Header />
          <AppRoutes />
          <WhatsAppFloatingBtn />
        </>
      )}
    </>
  );
}
