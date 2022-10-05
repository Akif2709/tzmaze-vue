import { API_URL } from "@/constants/contants";
import type { Show } from "@/types/shows.model";
import axios from "axios";

export default {
  getAllShows(): Promise<Show[]> {
    return axios
      .get<Show[]>(`${API_URL}shows`)
      .then((rawData) => rawData.data)
      .catch((error) => {
        throw new Error(`ApiService fetching shows error: ${error}`);
      });
  },

  searchShows(query: string = ""): Promise<Show[]> {
    return axios
      .get<Show[]>(`${API_URL}search/shows?q=${query}`)
      .then((rawData) => rawData.data)
      .catch((error) => {
        throw new Error(`ApiService fetching shows error: ${error}`);
      });
  },
};
