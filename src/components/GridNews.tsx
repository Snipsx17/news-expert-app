import { useFetchNews } from '../hooks/useFetchNews';
import { NewsCard } from './newsCard';

type newsData = {
  author: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
};

export const GridNews = (searchParameters) => {
  //   const { newsArticles } = useFetchNews(searchParameters);
  const newsArticles = [
    {
      author: 'Uberth',
      description:
        'The group told the BBC that it still required a commitment to a permanent ceasefire.',
      source: 'BBC News',
      title:
        'Hamas seeks commitment to permanent ceasefire in Gaza proposal response',
      url: 'https://www.bbc.com/news/articles/cv225l8l7jzo',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded',
    },
  ];

  return (
    <>
      <h2>News</h2>
      <ol>
        {newsArticles.map((newsItem: newsData) => (
          <NewsCard {...newsItem} />
        ))}
      </ol>
    </>
  );
};
