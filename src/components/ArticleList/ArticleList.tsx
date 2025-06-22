import { ReactElement } from 'react';
import IArticle from '@/types/Article';
import ArticleCard from './components/ArticleCard';
import styles from './ArticleList.module.css';

interface IArticleListProps {
  articles: IArticle[];
  authorName: string;
}

const ArticleList = ({
  articles,
  authorName,
}: IArticleListProps): ReactElement => (
  <div className={styles.container}>
    <h1 className={styles.title}>Articles</h1>
    <span className={styles.authorName}>
      Author <span>{authorName}</span>
    </span>
    <div className={styles.articleList}>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  </div>
);

export default ArticleList;
