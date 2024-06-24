import { useEffect, useState } from 'react';
import { getNews } from '../helpers/getNews';

type newsArticle = {
  author: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
};

export const useFetchNews = async (searchTerm: string, fromDate?: string) => {
  const [newsArticles, setNewsArticles] = useState<newsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      getNews(searchTerm, fromDate).then((data) => {
        setNewsArticles(data);
        setError(false);
        setIsLoading(false);
      });
    } catch (error) {
      setError(true);
    }
  }, [searchTerm, fromDate]);
  return { newsArticles, isLoading, error };
};
