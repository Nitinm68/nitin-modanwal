import { m, useReducedMotion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

export default function AnimatedSection({ children, className = "", delay = 0, once = true, amount = 0.2, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  const variant = {
    ...fadeUp,
    animate: {
      ...fadeUp.animate,
      transition: { ...fadeUp.animate.transition, delay }
    }
  };

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : variant.initial}
      whileInView={shouldReduceMotion ? { opacity: 1 } : variant.animate}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </m.div>
  );
}
