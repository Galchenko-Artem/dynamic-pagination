import User from '../types/users/user'

// Функция по генерации любого количества гонщиков с рандомными показателями
const generateUsers = (count: number): User[] => {
  const users: User[] = [];

  const avatar = 'images/pilot.svg';

  for(let i = 0; i < count; i ++){
    const name = getRandomName();
    const maxSpeed = Math.round(Math.random() * (300 - 200) + 200);
    const raceTime = getRandomTime();
    const penaltyTime = getRandomTime();
    const rating = Math.floor(Math.random() * 100);
    const id = generateUniqueId();

    const user: User = {
      id,
      name, 
      maxSpeed,
      raceTime,
      penaltyTime,
      rating,
      avatar,
    };
    users.push(user)
  }
  return users
};

const getRandomName = (): string => {
  const names = [
    'Max V.D', 'Jane L.W', 'Mike L.M', 'Emily K.W', 'David D.E',
    'Sarah A.K', 'Alex D.M', 'Olivia M.K', 'Nick D.V', 'Jacob V.D',
    'Isneban Von die san mos vue hy leo dio num hu K.D',
    'Hooojdkd mdmjucuk djdjdusul jdhuoe sadhhdj dncnx K.W'
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getRandomTime = (): string => {
  const hours: number = Math.floor(Math.random() * 24);
  const minutes: number = Math.floor(Math.random() * 60);
  const seconds: number = Math.floor(Math.random() * 60);
  const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const generateUniqueId = (): string => {
  const timestamp = new Date().getTime().toString(36);
  const randomNum = Math.random().toString(36);
  return timestamp + randomNum;
};

export default generateUsers;