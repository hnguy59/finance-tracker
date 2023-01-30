import axios from "axios";

export const axiosInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      "content-type": "application/json",
      "x-v": "3",
    },
  });
