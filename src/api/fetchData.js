import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_KEY_API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchDataYoutube = async (url) => {
  const data = await axios(`${base_url}/${url}`, options);
  return data;
};
