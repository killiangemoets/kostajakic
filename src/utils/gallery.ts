export const getCarouselWidth = (widthHeightRatio: number) => {
  if (widthHeightRatio <= 0.65) return "100vw";
  else if (widthHeightRatio <= 0.72) return "90vw";
  else if (widthHeightRatio <= 0.81) return "80vw";
  else if (widthHeightRatio <= 1.1) return "70vw";
  else if (widthHeightRatio <= 1.32) return "60vw";
  else if (widthHeightRatio <= 1.58) return "50vw";
  else if (widthHeightRatio <= 2.06) return "40vw";
  else if (widthHeightRatio <= 2.84) return "30vw";
  else return "20vw";
};
