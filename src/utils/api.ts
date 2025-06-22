import IArticle from '@/types/Article';
import IUser from '@/types/User';
import publicRuntimeConfig from '@/utils/config';

const { usersUrl, articlesUrl, userUrl } = publicRuntimeConfig;

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const res = await fetch(usersUrl);
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  }
};

export const getUser = async (userId: string): Promise<IUser> => {
  try {
    const res = await fetch(userUrl.replace('{useId}', userId));
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching user: ${error}`);
  }
};

export const getArticles = async (userId: string): Promise<IArticle[]> => {
  try {
    const res = await fetch(articlesUrl.replace('{useId}', userId));
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Error fetching articles: ${error}`);
  }
};
