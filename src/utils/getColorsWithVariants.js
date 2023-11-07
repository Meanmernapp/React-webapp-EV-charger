export const getPrimayStatusColors = (variant) => {
  switch (variant) {
    case "Available":
      return "#71953E";
    case "success":
      return "#71953E";
    case "Connected":
      return "#1A73E8";
    case "Discharging":
      return "#1A73E8";
    case "Charging":
      return "#1A73E8";
    case "Charging EV":
      return "#1A73E8";
    case "Not Available":
      return "#FF553E";
    case "danger":
      return "#FF553E";
    default:
      return "no proper variant provided";
  }
};
export const getStatusHolderBg = (variant) => {
  switch (variant) {
    case "Available":
      return "#CEDDB9";
    case "Discharging":
      return "#BDDFFF";
    case "Charging EV":
      return "#BDDFFF";
    case "Charging":
      return "#BDDFFF";
    case "danger":
      return "#ffeeec";
    case "success":
      return "#f1f5ec";
    default:
      return "no proper variant provided";
  }
};
