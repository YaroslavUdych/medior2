import { ReactElement } from 'react';
import styles from './Card.module.css';

const Card = ({
  children,
  className,
}: {
  children: ReactElement | ReactElement[];
  className?: string;
}): ReactElement => {
  return <div className={`${styles.card} ${className || ''}`}>{children}</div>;
};

export default Card;
