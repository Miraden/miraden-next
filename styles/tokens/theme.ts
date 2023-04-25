const theme = {
  colors: {
    blue: {
      default: "#4E6AF3",
      hover: "#3E56D0",
      focused: "#3E56D0",
      active: "#0F2BB5",
    },
    grey: {
      lightBlue: "#F1F7FF",
      default: "#F1F7FF",
      hover: "#F1F7FF",
      focused: "#F1F7FF",
      active: "#E1EDFD",
    },
    white: "#FFFFFF",
    warning: "#FFD64C",
    error: "#F34942",
    success: "#0AB258",

    stroke: {
      purple: "#F845FC",
      grey: "#C7D2E9",
      lightGrey: "#D4DDEE",
      divider: "#CFE2FC",
      dividerForm: "#F1F7FF",
    },
  },
  breakpoints: {
    "2xl": 1440 - 1, //range 1280 - 1439px
    xl: 1280 - 1, // range 1024px - 1279px
    lg: 1024 - 1, // range 768px - 1023px
    md: 768 - 1, // range 576px - 767px
    sm: 576 - 1, // range 360px - 575px
    xs: 360, // range 0 - 375px
  },
};

export { theme };
