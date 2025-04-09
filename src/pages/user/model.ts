import { sample } from 'effector';
import { createQuery } from '@farfetched/core';
import { routes } from '@/shared/config';
import { getUsersId } from '@/shared/api/requests';

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
