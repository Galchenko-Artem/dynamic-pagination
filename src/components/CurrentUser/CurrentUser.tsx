import { FC } from 'react'
import User from '../../types/users/user'
import cls from './CurrentUser.module.scss'

interface ICurrentUserProps {
  user: User;
}

const CurrentUser: FC <ICurrentUserProps> = ({ user}) => {
  return (
    <div className={cls.current_user}>
      <div className={cls.user_info}>
        <div>
          <img src={user.avatar} alt="user avatar" />
        </div>
         <div>
          <strong>ФИО:</strong>
          {user.name.length > 35 ? (
            <span>{`${user.name.slice(0, 35)}...`}</span>
          ) : (
            <span>{user.name}</span>
          )}
         </div>
         <div>
          <strong>Максимальная скорость:</strong> {user.maxSpeed}
         </div>
         <div>
          <strong>Время заезда:</strong> {user.raceTime}
         </div>
         <div>
          <strong>Штрафное время:</strong> {user.penaltyTime}
         </div>
         <div>
          <strong>Рейтинг:</strong> {user.rating}
        </div>
      </div>
    </div>
  )
}

export default CurrentUser;