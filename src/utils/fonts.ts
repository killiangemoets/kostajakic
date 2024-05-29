type FontWeight = "300" | "400" | "500" | "600" | "700";

export const getFontWeightClassName = (fontWeight: FontWeight) => {
  return {
    "font-light": fontWeight === "300",
    "font-normal": fontWeight === "400",
    "font-medium": fontWeight === "500",
    "font-semibold": fontWeight === "600",
    "font-bold": fontWeight === "700",
  };
};
