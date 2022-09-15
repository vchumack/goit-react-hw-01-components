export function setBgColor({ isOnline, theme }) {
  switch (isOnline) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.white;
  }
}
