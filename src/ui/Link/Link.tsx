import { UrlObject } from 'url';
import { ReactNode, ReactElement } from 'react';
import NextLink from 'next/link';
import styles from './Link.module.css';

interface ILinkProps {
  href: string | UrlObject;
  children: ReactNode;
  isExternal?: boolean;
}

const Link = ({
  href,
  children,
  isExternal = false,
}: ILinkProps): ReactElement => {
  if (isExternal) {
    return (
      <a
        href={typeof href === 'string' ? href : '#'}
        className={styles.text}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={styles.button}>
      {children}
    </NextLink>
  );
};

export default Link;
