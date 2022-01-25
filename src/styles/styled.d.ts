import 'styled-components';
import * as theme from './theme';

declare module 'styled-components'{
  type ThemeType = typeof theme.light;

  export interface DefaultTheme extends ThemeType {}
}