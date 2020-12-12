import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  mobileS: '23.125em', // 370px
};

const theme: DefaultTheme = {
  color: {
    primary: '#344E5C',
    secondary: '#4AB19D',
    point: '#EFC958',
    black: '#000000',
    gray5: '#444444',
    gray4: '#767676',
    gray3: '#C6C6C6',
    gray2: '#E6E6E6',
    gray1: '#E5E5E5',
    gray0: '#FAFAFA',
    white: '#FFFFFF',
    success: '#22bb33',
    danger: '#bb2124',
    warning: '#f0ad4e',
    info: '#5bc0de',
  },
  window: {
    pc: `@media screen and (max-width: ${size.pc}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
  },
};

export default theme;
