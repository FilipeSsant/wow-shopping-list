export default function conf(state = { darkModeOn: true }, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkModeOn: action.darkModeOn };
    default:
      return state;
  }
}
