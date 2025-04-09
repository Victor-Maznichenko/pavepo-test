import { api } from '@/shared/api/intance';

export const getUsers = async (requestConfig?: KyRequestConfig) =>
  api.get('users', requestConfig?.config).json<UsersResponse>();
