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
      getNews(searchTerm, fromDate).then((newsArticle) => {
        setNewsArticles(newsArticle);
        setError(false);
        setIsLoading(false);
        console.log(newsArticles);
        return { newsArticles, isLoading, error };
      });
    } catch (error) {
      setError(true);
    }
  }, [searchTerm]);
};
