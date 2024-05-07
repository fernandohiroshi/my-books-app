//FRAMER MOTION EFFECTS
export const Variants = {
  initial: {
    scale: 0.9,
    y: -30,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,

    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};
