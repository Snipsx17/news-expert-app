import placeHolder from '../assets/no-image.jpeg';

type newsData = {
  author: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
};

export const NewsCard = (data: newsData) => {
  const { author, description, source, title, url, urlToImage } = data;
  return (
    <div className="news-grid-item">
      <a href={url} target="_blank">
        <div className="news-img">
          <img src={urlToImage || placeHolder} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>
          <span>
            <strong>Source:</strong>
            {source}
          </span>
          <span>
            <strong>Author:</strong>
            {author}
          </span>
        </footer>
      </a>
    </div>
  );
};
