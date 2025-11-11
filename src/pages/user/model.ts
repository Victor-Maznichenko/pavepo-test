import { sample } from 'effector';
import { cache, createQuery, localStorageCache, retry } from '@farfetched/core';
import { routes } from '@/shared/config';
import { getUsersId } from '@/shared/api/requests';

const userQuery = createQuery({
  name: 'user',
  handler: getUsersId,
});

cache(userQuery, {
  adapter: localStorageCache({ maxAge: '90min', maxEntries: 100 }),
  staleAfter: '30min',
});

retry(userQuery, {
  times: 5,
  delay: 500,
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
