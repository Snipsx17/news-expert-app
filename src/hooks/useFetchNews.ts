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

type searchParameters = { searchParameter: string; fromDate: string };

export const useFetchNews = ({
  searchParameter,
  fromDate,
}: searchParameters) => {
  const [newsArticles, setNewsArticles] = useState<newsArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getNewsArticle = async () => {
      setIsLoading(true);
      const news = await getNews(searchParameter, fromDate);
      setNewsArticles(news);
      setIsLoading(false);
    };
    try {
      getNewsArticle();
    } catch (error) {
      setError(true);
    }
  }, [searchParameter, fromDate]);

  return { newsArticles, isLoading, error };
};
