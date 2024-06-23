type Article = {
  author: string;
  description: string;
  source: { name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export const getNews = async (searchTerm?: string, fromDate?: string) => {
  // const requestDate = fromDate ? fromDate : new Date().toLocaleDateString();

  // const url = `https://newsapi.org/v2/everything?q=${searchTerm}&from=${requestDate}&sortBy=popularity&apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }`

  try {
    const request = await fetch(
      'https://667884be0bd45250561eef93.mockapi.io/news'
    );

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const data = await request.json();

    const formattedArticle = data.map(
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
      throw error;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
