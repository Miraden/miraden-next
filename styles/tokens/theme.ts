const theme = {
  colors: {
    main: "#4E6AF3",
    button: {
      primary: {
        default: "#4E6AF3",
        hover: "#3E56D0",
        focused: "#3E56D0",
        active: "#0F2BB5",
        text: {
          default: "#FFF",
          hover: "#FFF",
          focused: "#FFF",
          click: "#FFF"
        },
        bg: {
          default: "#4E6AF3",
          hover: "#3E56D0",
          focused: "#3E56D0",
          click: "#0F2BB5"
        },
        stroke: {
          focused: "#F845FC"
        },
      },
      secondary: {
        default: "#F1F7FF",
        hover: "#F1F7FF",
        focused: "#F1F7FF",
        active: "#E1EDFD",
        bg: {
          default: "#F1F7FF",
          hover: "#F1F7FF",
          focused: "#F1F7FF",
          click: "#E1EDFD"
        },
        text: {
          default: "#2A344A",
          hover: "#4E6AF3",
          focused: "#4E6AF3",
          click: "#4E6AF3"
        },
        stroke: {
          focused: "#F845FC"
        }
      },
      tertiary: {
        active: "#F1F7FF",
        bg: {
          default: "#FFFFFF",
          hover: "#FFFFFF",
          focused: "#FFFFFF",
          click: "#F1F7FF",
          disabled: "#EFF3F"
        },
        text: {
          default: "#7786A5",
          hover: "#4E6AF3",
          focused: "#4E6AF3",
          click: "#4E6AF3",
          disabled: "#B8C6E3"
        },
        stroke: {
          focused: "#F845FC"
        }
      },
      request: {
        bg: {
          default: "#F1F7FF",
          hover: "#E1EDFD",
          focused: "#E1EDFD",
          click: "#CFE2FC",
          active: "#2A344A",
        },
        text: {
          default: "#2A344A",
          hover: "#2A344A",
          focused: "#2A344A",
          click: "#2A344A",
          active: "#FFF",
        },
        // @deprecated
        active: "#CFE2FC",
        strokeFocused: "#F845FC"
      },
      header: {
        // @deprecated
        active: "#343F56",
        bg: {
          default: "#2A344A",
          focused: "#414D65",
          hover: "#414D65",
          click: "#343F56",
          active: "#3A465D",
          disabled: "#343F56",
        },
        text: {
          default: "#FFF",
          hover: "#FFF",
          focused: "#FFF",
          disabled: "#7786A5",
          click: "#FFF",
          active: "#FFF",
        },
        strokeFocused: "#F845FC"
      },
      pay: {
        default: "#FFFFFF",
        hover: "#F1F7FF",
        focused: "#F1F7FF",
        active: "#CFE2FC",
        bg: {
          default: "#FFF",
          hover: "#F1F7FF",
          focused: "#F1F7FF",
          click: "#CFE2FC",
          active: "#E1EDFD"
        },
        text: {
          default: "#2A344A",
          hover: "#2A344A",
          focused: "#2A344A",
          click: "#2A344A",
          active: "#2A344A"
        },
        stroke: {
          default: "#E1EDFD",
          focused: "#F845FC",
        }
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
      focused: "#F845FC",
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
      bgValidation: "#FFFBF4",
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
    xs: 360, // range 0 - 375px,
    desktop: {
      max: 1440 - 1,
      min: 1024
    },
    tablet: {
      max: 1024 - 1,
      min: 576
    },
    mobile: {
      max: 576-1,
      min: 0,
    }
  },
  border: {
    radius: '10px'
  }
};

export {theme};
