'use client';

import { ReactElement } from 'react';
import clsx from 'clsx';
import { useAuthor } from '@/context/AuthorContext';
import IUser from '@/types/User';
import Card from '@/ui/Card/Card';
import Link from '@/ui/Link/Link';
import styles from './UserCard.module.css';

const UserCard = (user: IUser): ReactElement => {
  const { setAuthor } = useAuthor();

  const lat = user.address.geo.lat;
  const lng = user.address.geo.lng;

  const mapUrl = `https://mapy.cz/turisticka?source=coor&id=${lng}%2C${lat}&x=${lng}&y=${lat}&z=16`;

  return (
    <Card>
      <h2 className={styles.name}>{user.name}</h2>

      <span className={clsx(styles.subtitle, styles.bigMarginBottom)}>
        Username
      </span>
      <span className={clsx(styles.text, styles.bigMarginBottom)}>
        {user.username}
      </span>

      <span className={styles.subtitle}>Email</span>
      <span className={styles.text}>{user.email}</span>

      <span className={styles.subtitle}>Phone</span>
      <span className={styles.text}>{user.phone}</span>

      <span className={clsx(styles.subtitle, styles.bigMarginBottom)}>
        Website
      </span>
      <span className={clsx(styles.text, styles.bigMarginBottom)}>
        {user.website}
      </span>

      <div className={clsx(styles.group, styles.fullRow)}>
        <h3 className={styles.title}>Address</h3>
        <Link href={mapUrl} isExternal>
          Show on map
        </Link>
      </div>

      <span className={styles.subtitle}>Street</span>
      <span className={styles.text}>{user.address.street}</span>

      <span className={styles.subtitle}>Suite</span>
      <span className={styles.text}>{user.address.suite}</span>

      <span className={styles.subtitle}>City</span>
      <span className={styles.text}>{user.address.city}</span>

      <span className={clsx(styles.subtitle, styles.bigMarginBottom)}>
        Zipcode
      </span>
      <span className={clsx(styles.text, styles.bigMarginBottom)}>
        {user.address.zipcode}
      </span>

      <h3 className={clsx(styles.title, styles.fullRow)}>Company</h3>

      <span className={styles.subtitle}>Name</span>
      <span className={styles.text}>{user.company.name}</span>

      <span className={styles.subtitle}>Catch phrase</span>
      <span className={styles.text}>{user.company.catchPhrase}</span>

      <span className={styles.subtitle}>Bs</span>
      <span className={styles.text}>{user.company.bs}</span>

      <div className={styles.buttonWrapper}>
        <Link
          href={{
            pathname: `/articles/${user.id}`,
          }}
          onClick={(): void => setAuthor(user.name)}
        >
          Read articles
        </Link>
      </div>
    </Card>
  );
};

export default UserCard;
