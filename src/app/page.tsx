import { ReactElement } from 'react';
import { Home } from '@/components';
import { getUsers } from '@/utils/api';

const Page = async (): Promise<ReactElement> => {
  const users = await getUsers();

  return <Home users={users} />;
};

export default Page;
