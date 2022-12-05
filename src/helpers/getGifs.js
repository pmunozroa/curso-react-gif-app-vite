export const getGifs = async (category) => {
    const giphyURL = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${
        import.meta.env.VITE_GIPHY_API_KEY
    }&limit=10`;
    const response = await fetch(giphyURL);
    const { data } = await response.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
};
