'use client';

import { ReactElement } from 'react';
import { useAuthor } from '@/context/AuthorContext';
import IArticle from '@/types/Article';
import IUser from '@/types/User';
import ArticleList from './ArticleList';

interface IArticleListContainerProps {
  articles: IArticle[];
  fallbackAuthor: IUser | null;
}

const ArticleListContainer = ({
  articles,
  fallbackAuthor,
}: IArticleListContainerProps): ReactElement => {
  const { author } = useAuthor();

  const finalAuthor = author ?? fallbackAuthor?.name ?? 'Unknown Author';

  return <ArticleList articles={articles} authorName={finalAuthor} />;
};

export default ArticleListContainer;
