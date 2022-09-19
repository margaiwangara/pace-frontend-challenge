import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      grey: {
        light: string;
        dark: string;
      };
      blue: {
        light: string;
        dark: string;
      };
    };
  }
}
