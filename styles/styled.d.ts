import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      primarySub: string;
      secondarySub: string;
      point: string;
      black: string;
      gray5: string;
      gray4: string;
      gray3: string;
      gray2: string;
      gray1: string;
      gray0: string;
      white: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
    };
    window: {
      pc: string;
      tab: string;
      mobile: string;
      mobileS: string;
    };
  }
}
