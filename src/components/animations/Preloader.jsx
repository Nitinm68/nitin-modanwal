import { m } from "framer-motion";
import logo from "../../assets/images/Nitin Developer Official Logo.png";

export default function Preloader() {
  return (
    <m.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg-main)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <m.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      >
        <img src={logo} alt="Nitin Developer" style={{ height: "80px" }} />
      </m.div>
    </m.div>
  );
}
