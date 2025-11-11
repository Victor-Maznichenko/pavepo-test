import { createStore, sample } from 'effector';
import { cache, createQuery, localStorageCache, retry } from '@farfetched/core';
import { routes } from '@/shared/config';
import { filtersModel } from '@/features';
import { getUsers } from '@/shared/api/requests';

/* Users logic */
const usersQuery = createQuery({
  name: 'users',
  handler: getUsers,
});

cache(usersQuery, {
  adapter: localStorageCache({ maxAge: '90min', maxEntries: 100 }),
  staleAfter: '30min',
});

retry(usersQuery, {
  times: 5,
  delay: 500,
});

sample({
  clock: routes.users.opened,
  fn: () => undefined,
  target: usersQuery.start,
});

const $users = createStore<User[]>([]);
const $filteredUsers = createStore<User[]>([]);

sample({
  clock: usersQuery.$data,
  filter: Boolean,
  target: [$users, $filteredUsers],
});

/* Filters logic */
sample({
  clock: filtersModel.filtersChanged,
  source: $users,
  fn: (source, filterValues) => {
    let tempSource = source.concat();
    const [city, company, searchName] = filterValues;

    if (city) {
      tempSource = tempSource.filter((user) => user.address.city === city);
    }

    if (company) {
      tempSource = tempSource.filter((user) => user.company.name === company);
    }

    if (searchName) {
      tempSource = tempSource.filter((user) => user.name.includes(searchName));
    }

    return tempSource;
  },
  target: $filteredUsers,
});

sample({
  clock: filtersModel.filtersCleared,
  source: $users,
  target: $filteredUsers,
});

export const model = {
  $filteredUsers,
  $isUsersLoading: usersQuery.$pending,
};
