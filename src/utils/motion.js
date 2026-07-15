// Reusable motion variants for Framer Motion

// Smooth spring animation config for premium feel
export const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

// Page Transition: Fade in and slide up slightly
export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -15, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Scroll Reveal: Fade up
export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Stagger parent container
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

// Child item for stagger container
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Card Hover Effects (Lift, scale, and glow)
export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.02, 
    y: -8, 
    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
    transition: springConfig 
  }
};

// Button hover/tap effects
export const buttonInteraction = {
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 }
};
