import { api } from '@/shared/api/intance';

export interface GetUserParams {
  userId: string;
}
export type GetUserConfig = KyRequestConfig<GetUserParams>;

export const getUsersId = async ({ params, config }: GetUserConfig) =>
  api.get(`users/${params.userId}`, config).json<Promise<UserResponse>>();
