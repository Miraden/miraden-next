const theme = {
  colors: {
    main: "#4E6AF3",
    button: {
      primary: {
        default: "#4E6AF3",
        hover: "#3E56D0",
        focused: "#3E56D0",
        active: "#0F2BB5",
      },
      secondary: {
        default: "#F1F7FF",
        hover: "#F1F7FF",
        focused: "#F1F7FF",
        active: "#E1EDFD",
      },
      tertiary: {
        active: "#F1F7FF",
      },
      request: {
        default: "#F1F7FF",
        hover: "#E1EDFD",
        focused: "#E1EDFD",
        active: "#CFE2FC",
        isActive: "#2A344A",
      },
      header: {
        default: "#F1F7FF",
        hover: "#414D65",
        focused: "#414D65",
        active: "#343F56",
      },
      pay: {
        default: "#FFFFFF",
        hover: "#F1F7FF",
        focused: "#F1F7FF",
        active: "#CFE2FC",
      },
      disabled: {
        background: "#EFF3FB",
        text: "#B8C6E3",
      },
    },
    blue: {
      default: "#4E6AF3",
      hover: "#3E56D0",
      focused: "#3E56D0",
      active: "#0F2BB5",
    },
    grey: {
      textGrey: "#7786A5",
      alt: '#E1EDFD',
      lightBlue: "#F1F7FF",
      default: "#F1F7FF",
      disabled: "#B8C6E3",
    },
    transparent: "transparent",
    white: "#FFFFFF",
    warning: "#FFD64C",
    error: "#F34942",
    success: "#0AB258",
    black: "#2A344A",
    effects: {
      overlayGrey: "rgba(60, 75, 97, 0.6)"
    },
    stroke: {
      purple: "#F845FC",
      grey: "#C7D2E9",
      lightGrey: "#D4DDEE",
      divider: "#CFE2FC",
      dividerForm: "#F1F7FF",
    },
    background: {
      white: "#FFF",
      lightBlue: "#F1F7FF",
      disabled: "#EFF3FB",
      lightGrey: "#EEF1F5",
      black: "#2A344A",
      grey: "#3A465D",
      green: "#EAFFF3",
      lianer: "#FFF"
    },
    text: {
      black: "#2A344A",
      white: "#FFF",
      grey: "#7786A5",
      disabled: "#B8C6E3",
      warning: "#FFD64C",
      error: "#F34942",
      success: "#0AB258"
    },
    fields: {
      form: "#FFF",
      title: "#7786A5",
      text: "#2A344A",
      description: "#94A5CA",
      stroke: "#E1EDFD",
      strokeHover: "#CDDEF4",
      strokeFocused: "#4E6AF3",
      strokeValidation: "#FFEAC1",
      strokeError: "#FFD8D8",
      strokeErrorBg: "#FFF5F5"
    },
    others: {
      messageBg: "#CFE2FC",
      greenBg: "#36BF76"
    }
  },
  breakpoints: {
    "2xl": 1440 - 1, //range 1280 - 1439px
    xl: 1280 - 1, // range 1024px - 1279px
    lg: 1024 - 1, // range 768px - 1023px
    md: 768 - 1, // range 576px - 767px
    sm: 576 - 1, // range 360px - 575px
    xs: 360, // range 0 - 375px
  },
  border: {
    radius: '10px'
  }
};

export { theme };
