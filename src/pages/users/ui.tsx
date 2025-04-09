import { Filters } from '@/features';
import { UsersList } from '@/widgets';
import styles from './styles.module.scss';

export const UsersPage = () => (
  <div>
    <h2>Список пользователей:</h2>
    <Filters className={styles.filters} />
    <UsersList />
  </div>
);
