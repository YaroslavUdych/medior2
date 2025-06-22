import { ReactElement } from 'react';
import Card from '@/components/Card/Card';
import IArticle from '@/types/Article';
import styles from './ArticleCard.module.css';

const ArticleCard = (article: IArticle): ReactElement => {
  return (
    <Card className={styles.card}>
      <h2 className={styles.title}>{article.title}</h2>
      <p className={styles.body}>{article.body}</p>
    </Card>
  );
};

export default ArticleCard;
