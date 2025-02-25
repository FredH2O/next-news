import axios from "axios";

const getNews = async ({ section }) => {
  try {
    const { data } = await axios.get(
      `https://content.guardianapis.com/search?section=${section}&api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}`
    );

    return data.response.results;
  } catch (error) {
    console.error("Error fetching data...", error);

    return [];
  }
};

export default getNews;
