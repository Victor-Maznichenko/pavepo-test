import { api } from '@/shared/api/intance';

export type GetUsersConfig = KyRequestConfig;

export const getUsers = async (requestConfig?: GetUsersConfig) =>
  api.get('users', requestConfig?.config).json<UsersResponse>();
