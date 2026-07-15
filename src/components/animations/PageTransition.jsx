import { m, useReducedMotion } from "framer-motion";
import { pageTransition } from "../../utils/motion";

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={shouldReduceMotion ? { opacity: 0 } : pageTransition.initial}
      animate={shouldReduceMotion ? { opacity: 1 } : pageTransition.animate}
      exit={shouldReduceMotion ? { opacity: 0 } : pageTransition.exit}
    >
      {children}
    </m.div>
  );
}
