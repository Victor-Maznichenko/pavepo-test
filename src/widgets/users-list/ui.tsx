import { useList } from 'effector-react';
import { Link } from 'atomic-router-react';
import { Store } from 'effector';
import { model } from './model';
import { routes } from '@/shared/config';
import styles from './styles.module.scss';

export const UsersList = () => {
  const list = useList(model.$users as Store<UsersResponse>, (user) => (
    <Link className={styles.userCard} to={routes.user} params={{ userId: String(user.id) }}>
      <div className={styles.userCard__emoji} />
      <h4 className={styles.userCard__name}>{user.name}</h4>
      <div className={styles.userCard__contacts}>
        <p>Contacts:</p>
        <ul className={styles.userCard__list}>
          <li className={styles.userCard__listItem}>
            <span>email: </span>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li className={styles.userCard__listItem}>
            <span>phone: {user.phone}</span>
          </li>
          <li className={styles.userCard__listItem}>
            <span>website: </span>
            <a href={user.website}>{user.website}</a>
          </li>
        </ul>
      </div>
    </Link>
  ));

  return <div className={styles.usersList}>{list}</div>;
};
