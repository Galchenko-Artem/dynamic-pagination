// Рандомно получаем время для исполнения фетча от 500 до 1000 мс
const randomTimeFetch = (): number => {
  return Math.round(Math.random() * (1000 - 500) + 500);
};

export default randomTimeFetch;