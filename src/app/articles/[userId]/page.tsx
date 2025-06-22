import { ReactElement } from 'react';
import ArticleListContainer from '@/components/ArticleList/ArticleListContainer';
import { getArticles, getUser } from '@/utils/api';

const Page = async ({
  params,
}: {
  params: { userId: string };
}): Promise<ReactElement> => {
  const userId = params.userId;

  const [user, articles] = await Promise.all([
    getUser(userId),
    getArticles(userId),
  ]);

  return <ArticleListContainer articles={articles} fallbackAuthor={user} />;
};

export default Page;
