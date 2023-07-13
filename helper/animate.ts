export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
    },
  },
};

export const item = {
  hidden: { opacity: 0, screenY: 20 },
  show: { opacity: 1, screenY: 0 },
};
