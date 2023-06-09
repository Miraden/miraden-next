import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  .Font_16_20 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

  .Font_52_120 {
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


  .Font_40_120 {
    font-size: 40px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_32_120 {
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

  .Font_24_120 {
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

  .Font_20_120 {
    font-size: 20px;
    line-height: 120%;
    font-weight: 500;
  }

  .Font_20_120_700 {
    font-size: 20px;
    line-height: 120%;
    font-weight: 700;
  }

  .Font_20_24 {
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

  .Font_16_150 {
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
  }

  .Font_16_140 {
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

  .Font_16_24 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .Font_16_20 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

  .Font_14_140 {
    font-size: 14px;
    line-height: 140%;
    font-weight: 400;
  }

  .Font_14_16 {
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }

  .Font_14_16_600 {
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }

  .Font_12_20 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }
  
  .Font_12_16 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
  }

  .Font_12_16_600 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    letter-spacing: 0.07em;
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
`;

export { Fonts };
