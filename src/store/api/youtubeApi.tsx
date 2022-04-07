import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const firstRecomendedVideos = () => {
  return instance
    .get(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=UA&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then((res) => res.data.items);
};

export const videoCardsAPI = (channelId: string) => {
  return instance.get(
    `channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
};

export const videoInfoAPI = (videoId?: string) => {
  return instance.get(
    `videos?part=snippet%2C%20statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
};

export const videoChanelAPI = (channelId: string) => {
  return instance.get(
    `channels?part=snippet%2C%20statistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
};

export const searchVideo = (
  result: number,
  type: string,
  searchQuery?: string
) => {
  return instance.get(
    `search?part=snippet&maxResults=${result}&type=${type}&q=${searchQuery}&safeSearch=none&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
};
