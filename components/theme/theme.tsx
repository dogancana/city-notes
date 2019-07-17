import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core/styles";
import { Color } from "./color-scheme";
import { GlobalStyle } from "./global";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: Color.blue
    },
    secondary: {
      main: Color.saffron
    }
  }
});
const theme = responsiveFontSizes(customTheme);

export const CustomThemeProvider: React.FunctionComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </MuiThemeProvider>
);
