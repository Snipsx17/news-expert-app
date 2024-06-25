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
    <div>
      <a href={url}>
        <img src={urlToImage} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Source:{source}</span>
        <span>Author:{author}</span>
      </a>
    </div>
  );
};
