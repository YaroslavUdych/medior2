import { ReactElement } from 'react';
import { Metadata } from 'next';
import '@/styles/index.scss';
import { AuthorProvider } from '@/context/AuthorContext';

interface IProps {
  children: ReactElement;
}

export const metadata: Metadata = {
  title: 'Medior Page',
  icons: {
    icon: '/favicons/favicon.svg',
  },
};

const RootLayout = ({ children }: IProps): ReactElement => (
  <html lang="en">
    <body className="page-layout">
      <AuthorProvider>{children}</AuthorProvider>
    </body>
  </html>
);

export default RootLayout;
