import { ReactElement } from 'react';
import IUser from '@/types/User';
import UserCard from './components/UserCard/UserCard';
import styles from './UserList.module.css';

const UserList = ({ users }: { users: IUser[] }): ReactElement => (
  <>
    <h1 className={styles.title}>Users</h1>
    <div className={styles.list}>
      {users.map((user: IUser) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  </>
);

export default UserList;
