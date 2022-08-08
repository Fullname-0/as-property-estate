import "../styles/globals.css";
import "../styles/gallery.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { ContactContextProvider } from "../store/contact-context";
import { EstateContextProvider } from "../store/estate-context";
import { SnackbarProvider } from "notistack";

const palette = {
  palette: {
    primary: {
      main: "#FFBE00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#AFAFB1",
    },
  },
};

const muiTheme = createMuiTheme(palette);
const defaultTheme = createTheme(palette);

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "1.8rem",
        fontWeight: "500",
      },
      h3: {
        fontSize: "1.6rem",
        fontWeight: "700",
      },
      h5: {
        fontSize: "1.4rem",
      },

    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={1}>
            <ContactContextProvider>
              <EstateContextProvider>
                <Component {...pageProps} />
              </EstateContextProvider>
            </ContactContextProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
export default MyApp;
