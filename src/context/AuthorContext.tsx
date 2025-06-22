'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from 'react';

interface IAuthorContextType {
  author: string | null;
  setAuthor: (author: string) => void;
}

const AuthorContext = createContext<IAuthorContextType | undefined>(undefined);

export const AuthorProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [author, setAuthor] = useState<string | null>(null);

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthor = (): IAuthorContextType => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error('useAuthor must be used within AuthorProvider');
  }
  return context;
};
