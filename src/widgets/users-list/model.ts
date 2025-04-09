import { sample } from 'effector';
import { createQuery } from '@farfetched/core';
import { getUsers } from '@/shared/api/requests';
import { routes } from '@/shared/config';

const usersQuery = createQuery({
  handler: getUsers,
});

const $users = usersQuery.$data.map((users) => users ?? []);

sample({
  clock: routes.users.opened,
  fn: () => undefined,
  target: usersQuery.start,
});

export const model = {
  $users,
  $isUsersLoading: usersQuery.$pending,
};
