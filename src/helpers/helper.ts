export const check = () => {
}

export const getRandomInteger = (min = 1000, max = 999999) => {
  return Math.random() * (max - min) + min;
}