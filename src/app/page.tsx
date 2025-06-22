import { ReactElement } from 'react';
import { Home } from '@/components';
import IUser from '@/types/User';
import publicRuntimeConfig from '@/utils/config';

const { usersUrl } = publicRuntimeConfig;

const getUsers = async (): Promise<IUser[]> => {
  try {
    const res = await fetch(usersUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  }
};

const Page = async (): Promise<ReactElement> => {
  const users = await getUsers();

  return <Home users={users} />;
};

export default Page;
