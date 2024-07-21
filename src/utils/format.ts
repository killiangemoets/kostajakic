export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const getFistName = (name: string) => {
  return name.split(" ")[0];
};
export const getLastName = (name: string) => {
  return name.split(" ")[1];
};
