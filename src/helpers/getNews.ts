type Article = {
  author: string;
  description: string;
  source: { name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type newsArticle = {
  author: string;
  description: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
};

export const getNews = async (searchTerm: string, fromDate?: string) => {
  const requestDate = fromDate
    ? fromDate
    : new Date().toLocaleDateString().split('/').join('-');

  const url = `https://newsapi.org/v2/everything?q=${searchTerm}&from=${requestDate}&sortBy=popularity&apiKey=${
    import.meta.env.VITE_API_KEY
  }`;

  try {
    const request = await fetch(url);

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const { articles } = await request.json();

    const formattedArticle: newsArticle[] = articles.map(
      ({ author, description, source, title, url, urlToImage }: Article) => ({
        author,
        description,
        source: source.name,
        url,
        title,
        urlToImage,
      })
    );

    return formattedArticle;
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error('An unknown error occurred');
    }
  }
};
