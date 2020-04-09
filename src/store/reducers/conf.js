import { darkModeColors, lightModeColors } from "@styles/colors";

export default function conf(state = { darkMode: true }, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      const colorObj = action.darkMode ? darkModeColors : lightModeColors;
      return { ...state, darkMode: action.darkMode, modeColor: colorObj };
    default:
      const color = state.darkMode ? darkModeColors : lightModeColors;
      return { ...state, modeColor: color };
  }
}
