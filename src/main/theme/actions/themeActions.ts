import { SupportedThemes } from "./../../components/ThemeSelect";

export const toggleTheme = (theme: SupportedThemes) => {
  return async (dispatch: Function) => {
    if (theme === SupportedThemes.LIGHT) {
      dispatch({ type: "ENABLE_LIGHT" });
    } else {
      dispatch({ type: "ENABLE_DARK" });
    }
  };
};
