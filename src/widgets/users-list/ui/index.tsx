import { useList, useUnit } from 'effector-react';
import { Link } from 'atomic-router-react';
import { Store } from 'effector';
import { model } from '../model';
import { routes } from '@/shared/config';
import { getRandomEmoji } from '@/shared/lib';
import styles from './styles.module.scss';
import { SkeletonUsersList } from './skeletons';

export const UsersList = () => {
  const isLoading = useUnit(model.$isUsersLoading);
  const list = useList(model.$filteredUsers as Store<UsersResponse>, (user) => (
    <Link className={styles.userCard} to={routes.user} params={{ userId: String(user.id) }}>
      <div className={styles.userCard__emoji}>{getRandomEmoji()}</div>
      <h4 className={styles.userCard__name}>{user.name}</h4>
      <p>Город: {user.address.city}</p>
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

  return <div className={styles.usersList}>{isLoading ? <SkeletonUsersList /> : list}</div>;
};
