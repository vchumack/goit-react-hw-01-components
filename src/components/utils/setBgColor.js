export function setBgColor(props) {
  switch (props.isOnline) {
    case true:
      return 'rgba(37, 158, 37, 0.621)';
    case false:
      return 'rgba(165, 39, 39, 0.748);';
    default:
      return 'white';
  }
}
