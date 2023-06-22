import { createGlobalStyle } from "styled-components";
import {theme} from "./theme";

const mobile = theme.breakpoints.mobile.max + "px"
const tablet = theme.breakpoints.tablet.max + "px"

const Fonts = createGlobalStyle`
  .Font_16_20 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

  .Font_52_120,
  .Font_headline_1 {
    font-size: 52px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_50_120 {
    font-size: 50px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_50_60 {
    font-size: 50px;
    line-height: 60px;
    font-weight: 700;
  }

  .Font_44_120 {
    font-size: 44px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_44_52 {
    font-size: 44px;
    line-height: 52px;
    font-weight: 700;
  }


  .Font_40_120,
  .Font_headline_2 {
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_32_120,
  .Font_headline_3 {
    font-size: 32px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_32_100 {
    font-size: 32px;
    line-height: 100%;
    font-weight: 500;
  }

  .Font_28_120 {
    font-size: 28px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_26_120 {
    font-size: 26px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_26_160 {
    font-size: 26px;
    line-height: 160%;
    font-weight: 400;
  }

  .Font_24_120,
  .Font_headline_4 {
    font-size: 24px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_22_160 {
    font-size: 22px;
    line-height: 160%;
    font-weight: 400;
  }

  .Font_22_120_600 {
    font-size: 22px;
    line-height: 120%;
    font-weight: 600;
  }

  .Font_20_120,
  .Font_headline_5 {
    font-size: 20px;
    line-height: 120%;
    font-weight: 500;
    margin: 0;
  }

  .Font_20_120_700,
  .Font_Accent_20_B {
    font-size: 20px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_20_24,
  .Font_button_normal {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }

  .Font_20_24_500 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }

  .Font_18_120 {
    font-size: 18px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_18_150 {
    font-size: 18px;
    line-height: 150%;
    font-weight: 400;
  }

  .Font_18_160 {
    font-size: 18px;
    line-height: 160%;
    font-weight: 400;
  }


  .Font_18_21 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 400;
  }

  .Font_16_150,
  .Font_body_base {
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
  }

  .Font_16_140,
  .Font_Accent_16_S {
    font-size: 16px;
    line-height: 140%;
    font-weight: 600;
  }

  .Font_16_120 {
    font-size: 16px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_16_140_400 {
    font-size: 16px;
    line-height: 140%;
    font-weight: 400;
  }

  .Font_16_24,
  .Font_fields_placeholder {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .Font_16_20,
  .Font_button_medium,
  .Table_body_base {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

  .Font_14_140,
  .Font_body_alt {
    font-size: 14px;
    line-height: 140%;
    font-weight: 400;
  }

  .Font_14_16,
  .Font_button_small {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  .Font_14_16_600,
  .Font_Accent_14_m {
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }

  .Font_12_20,
  .Table_headline,
  .Table_body_alt {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }

  .Table_headline {
    color: ${theme.colors.text.grey};
    text-transform: uppercase;
    font-weight: 600;
  }

  .Font_12_16,
  .Font_fields_title,
  .Font_fields_description,
  .Font_captions_1 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  .Font_12_16_600,
  .Font_Accent_12_caps {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.07em;
  }

  .Font_Accent_12_caps {
    text-transform: uppercase;
  }

  .Font_captions_2 {
    font-size: 10px;
    line-height: 16px;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    .lg\\:Font_44_120 {
      font-size: 44px;
      line-height: 120%;
      font-weight: 700;
    }

    .lg\\:Font_18_160 {
      font-size: 18px;
      line-height: 160%;
    }

    .lg\\:Font_18_120_500 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    }

    .lg\\:Font_26_120_600 {
      font-size: 26px;
      line-height: 120%;
      font-weight: 600;
    }

    .lg\\:Font_26_120_500 {
      font-size: 26px;
      line-height: 120%;
      font-weight: 500;
    }

    .lg\\:Font_16_24 {
      font-size: 16px;
      line-height: 24px;
    }

    .lg\\:Font_16_140 {
      font-size: 16px;
      line-height: 140%;
    }

    .lg\\:Font_14_140 {
      font-size: 14px;
      line-height: 140%;
    }

    .lg\\:Font_12_16 {
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 768px) {
    .md\\:Font_16_150_500 {
      font-size: 16px;
      line-height: 120%;
      font-weight: 500;
    }
  }

  @media (max-width: 576px) {
    .sm\\:Font_26_120 {
      font-size: 26px;
      line-height: 120%;
      font-weight: 700;
    }

    .sm\\:Font_22_120 {
      font-size: 22px;
      line-height: 120%;
    }

    .sm\\:Font_22_120_500 {
      font-size: 22px;
      line-height: 120%;
      font-weight: 500;
    }

    .sm\\:Font_18_120_700 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 700;
    }

    .sm\\:Font_18_120_600 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 600;
    }

    .sm\\:Font_18_120_500 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    }

    .sm\\:Font_16_24 {
      font-size: 16px;
      line-height: 24px;
    }

    .sm\\:Font_16_120_600 {
      font-size: 16px;
      line-height: 120%;
      font-weight: 600;
    }

    .sm\\:Font_14_16_600 {
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
    }

    .sm\\:Font_14_140 {
      font-size: 14px;
      line-height: 140%;
    }

    .sm\\:Font_12_16 {
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: ${tablet}) {
    .Font_52_120,
    .Font_headline_1 {
      font-size: 40px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_40_120,
    .Font_headline_2 {
      font-size: 32px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_32_120,
    .Font_headline_3 {
      font-size: 26px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_24_120,
    .Font_headline_4 {
      font-size: 20px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_20_120,
    .Font_headline_5 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    }
  }

  @media (max-width: ${mobile}) {
    .Font_52_120,
    .Font_headline_1 {
      font-size: 32px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_40_120,
    .Font_headline_2 {
      font-size: 28px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_32_120,
    .Font_headline_3 {
      font-size: 22px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_24_120,
    .Font_headline_4 {
      font-size: 20px;
      line-height: 120%;
      font-weight: 500;
    }

    .Font_20_120,
    .Font_headline_5 {
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    }
  }
`;

export { Fonts };
