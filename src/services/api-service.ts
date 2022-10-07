import { API_URL } from "@/constants/contants";
import type { CrewItem } from "@/types/crew.model";
import type { Episode } from "@/types/episode.model";
import type { SearchShowsResponseItem, Show } from "@/types/shows.model";
import axios, { AxiosError, type AxiosResponse } from "axios";

export default {
  getAllShows(): Promise<Show[]> {
    return axios
      .get<Show[]>(`${API_URL}shows`)
      .then((rawData: AxiosResponse) => rawData.data)
      .catch((error: AxiosError) => {
        throw new Error(`ApiService fetching shows error: ${error.message}`);
      });
  },

  searchShows(query: string = ""): Promise<Show[]> {
    return axios
      .get<SearchShowsResponseItem[]>(`${API_URL}search/shows?q=${query}`)
      .then((rawData: AxiosResponse) => {
        return rawData.data.map((item: { show: Show }) => item.show);
      })
      .catch((error: AxiosError) => {
        throw new Error(`ApiService searching shows error: ${error.message}`);
      });
  },

  getShowDetails(id: string = ""): Promise<Show> {
    return axios
      .get<Show>(`${API_URL}shows/${id}`)
      .then((rawData: AxiosResponse) => rawData.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `ApiService fetching show details error: ${error.message}`
        );
      });
  },
  getCrewOfShow(id: string = ""): Promise<CrewItem[]> {
    return axios
      .get<CrewItem[]>(`${API_URL}shows/${id}/crew`)
      .then((rawData: AxiosResponse) => rawData.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `ApiService fetching show crews error: ${error.message}`
        );
      });
  },
  getEpisodesOfShow(id: string = ""): Promise<Episode[]> {
    return axios
      .get<Episode[]>(`${API_URL}shows/${id}/episodes`)
      .then((rawData: AxiosResponse) => rawData.data)
      .catch((error: AxiosError) => {
        throw new Error(
          `ApiService fetching show episodes error: ${error.message}`
        );
      });
  },
};
