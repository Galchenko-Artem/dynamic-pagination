import { FC, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import randomTimeFetch from '../../helpers/randomTimeFetch';
import User from '../../types/users/users';
import data from '../../fakeapi/users';
import CurrentUser from '../CurrentUser/CurrentUser';
import cls from './UserList.module.scss';
import Footer from '../Footer/Footer';

const UserList: FC = () => {
const [users, setUsers] = useState<User[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [currentPage, setCurrentPage] = useState<number>(1);

const { ref, inView } = useInView({
  threshold: 0.85 // отслеживаем видимость блока в самом низу
});

  useEffect(() => {
    if (users.length < data.length && inView) {
      /* эмулируем запрос на сервер, в случае в реальным api
        запросы бы шли по количеству страниц, а общее количество можно было бы
        забирать из заголовков
      */
      try {
        setIsLoading(true);
        const fetchData = async (): Promise<User[]> => {
        return new Promise((res) => {
          const startIndex = (currentPage - 1) * 50;
          const finalIndex = currentPage * 50;
          const newUsers = data.slice(startIndex, finalIndex);
          setTimeout(() => res(newUsers), randomTimeFetch());
        });
      };

      fetchData().then((res) => {
        setUsers([...users, ...res]);
        setIsLoading(false);
        setCurrentPage(currentPage + 1);
      });
      } catch (err) {
        console.error(err);
      }
    }
  }, [inView]);

  return (
    <div>
      <h2 className={cls.title}>Пилоты {users.length}</h2>
      <div className={cls.wrapper}>
        {users.map((user) => (
          <CurrentUser key={user.id} user={user} />
        ))}
      </div>
      {isLoading && (
       <div className={cls.loadingWrapper}>
          <div className={cls.loading} />
       </div>
     )}
     {users.length === data.length ? (
      <Footer />
     ) : (
      <div ref={ref} style={{ height: 200 }} />
     )}
    </div>
   );
};

export default UserList;
