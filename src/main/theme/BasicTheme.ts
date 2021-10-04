import { SupportedThemes } from "../components/ThemeSelect";

interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
}

const darkTheme: Theme = {
  colors: {
    primary: "#ABCD",
    secondary: "#EEE4E2",
  },
};

const lightTheme: Theme = {
  colors: {
    primary: "#FF8833",
    secondary: "#EEE4E2",
  },
};

export const getThemeValues = (supportedTheme: SupportedThemes) => {
  if (supportedTheme === SupportedThemes.DARK) {
    return darkTheme;
  } else {
    return lightTheme;
  }
};
