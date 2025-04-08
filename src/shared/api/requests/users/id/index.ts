import { api } from '@/shared/api/intance';

export interface GetUserParams {
  id: string;
}
export type GetUserConfig = KyRequestConfig<GetUserParams>;

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get(`users/${params.id}`, config).json<Promise<UserResponse>>();
