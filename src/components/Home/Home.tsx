import { ReactElement } from 'react';
import MainText from '@/components/MainText/MainText';
import UserList from '@/components/UserList/UserList';
import IUser from '@/types/User';
import style from './Home.module.css';

const Home = ({ users }: { users: IUser[] }): ReactElement => (
  <>
    <h1 className={style.title}>Welcome, medior!</h1>
    <p className={style.paragraph}>Read carefully README.md!</p>
    <MainText />
    <UserList users={users} />
  </>
);

export default Home;
