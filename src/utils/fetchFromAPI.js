import axios from "axios";

// export const apiUrl = "https://invidious.fdn.fr/api/v1"
export const apiUrl = "https://youtube-project-server.vercel.app/api";


export const getFeedVideos = async (page) => {
  const response = await axios.get(`${apiUrl}/feed?page=${page}`);
  return response.data;
};

export const getComments = async (videoId) => {
  const response = await axios.get(`${apiUrl}/comments/${videoId}`);
  return response.data;
};

export const getMusicVideos = async () => {
  const response = await axios.get(`${apiUrl}/music`);
  return response.data;
};
export const getTrendingVideos = async () => {
  const response = await axios.get(`${apiUrl}/trending`);
  return response.data;
};
export const getTrendingShorts = async () => {
  const response = await axios.get(`${apiUrl}/trending/shorts`);
  return response.data;
};
export const getGamingideos = async () => {
  const response = await axios.get(`${apiUrl}/gaming`);
  return response.data;
};
export const getFilmVideos = async () => {
  const response = await axios.get(`${apiUrl}/film`);
  return response.data;
};
export const getSportsVideos = async () => {
  const response = await axios.get(`${apiUrl}/sports`);
  return response.data;
};

export const getChannel = async (channelId) => {
  const response = await axios.get(
    `https://invidious.fdn.fr/api/v1/channels/${channelId}`
  );

  return response.data;
};

export const getChannelVideos = async (channelId, filter = "Latest") => {
  const response = await axios.get(
    `${apiUrl}/channel/${channelId}/videos?filter=${filter}`
  );
  return response.data;
};
export const getChannelShorts = async (channelId, filter = "Latest") => {
  const response = await axios.get(
    `${apiUrl}/channel/${channelId}/shorts?filter=${filter}`
  );
  return response.data;
};
export const getChannelPosts = async (channelId) => {
  const response = await axios.get(`${apiUrl}/channel/${channelId}/posts`);
  return response.data;
};

export const getYoutubeChannel = (channelId) =>
  `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=AIzaSyDP7bKK-HbdKWhwln_Ds9fu0MqA-sPbpXI`;

// export const getChannelVideos = async (channelId) => {
//     const response = await axios.get(`${apiUrl}/channel/${channelId}`);
//     return response.data;
// }
