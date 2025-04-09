import { useUnit } from 'effector-react';
import { model } from './model';
import styles from './styles.module.scss';

export const UserPage = () => {
  const user = useUnit(model.$user);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Страница пользователя:</h2>
      <div className={styles.user__emoji} />
      <h4 className={styles.user__name}>{user.name}</h4>
      <div className={styles.user__contacts}>
        <p>Contacts:</p>
        <ul className={styles.user__list}>
          <li className={styles.user__listItem}>
            <span>email: </span>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li className={styles.user__listItem}>
            <span>phone: {user.phone}</span>
          </li>
          <li className={styles.user__listItem}>
            <span>website: </span>
            <a href={user.website}>{user.website}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
