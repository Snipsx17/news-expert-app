import { useFetchNews } from '../hooks/useFetchNews';
import { NewsCard } from './NewsCard';

type newsData = {
  author: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
};

type searchParameters = { searchParameter: string; fromDate: string };

export const GridNews = (searchData: searchParameters) => {
  const { newsArticles, error, isLoading } = useFetchNews(searchData);

  return (
    <div className="news-container">
      <h2 className="news-grid-title">News</h2>
      {error ? (
        <>
          <p>
            Upss... An error ocurred while try to get news, try again later.
          </p>
          <span></span>
        </>
      ) : (
        <div className="news-grid">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            newsArticles.map((newsItem: newsData) => (
              <NewsCard key={self.crypto.randomUUID()} {...newsItem} />
            ))
          )}
        </div>
      )}
    </div>
  );
};
