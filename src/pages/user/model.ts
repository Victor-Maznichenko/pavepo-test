import { sample } from 'effector';
import { createQuery } from '@farfetched/core';
import { getUsersId } from '@/shared/api/requests';
import { routes } from '@/shared/config';

const userQuery = createQuery({
  handler: getUsersId,
});

const $user = userQuery.$data.map((user) => user);

sample({
  clock: routes.user.opened,
  target: userQuery.start,
});

export const model = {
  $user,
  $isUsersLoading: userQuery.$pending,
};
