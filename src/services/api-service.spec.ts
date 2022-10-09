import ApiService from "@/services/api-service";
import axios from "axios";
import type { Mocked } from "vitest";

vi.mock("axios", () => {
  return {
    default: {
      get: vi.fn(),
    },
  };
});

describe.only("ApiService", () => {
  describe("ON SUCCESS", () => {
    let mockedAxios: Mocked<typeof axios>;
    beforeEach(async () => {
      mockedAxios = axios as Mocked<typeof axios>;
      mockedAxios.get.mockReset();
      mockedAxios.get.mockResolvedValue({
        data: [],
      });
    });
    it("getAllShows should call axios method", () => {
      ApiService.getAllShows();
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.tvmaze.com/shows"
      );
    });
    it("searchShows should call axios method", () => {
      ApiService.searchShows("mind");
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.tvmaze.com/search/shows?q=mind"
      );
    });
    it("getShowDetails should call axios method", () => {
      ApiService.getShowDetails("1");
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.tvmaze.com/shows/1"
      );
    });
    it("getCrewOfShow should call axios method", () => {
      ApiService.getCrewOfShow("12");
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.tvmaze.com/shows/12/crew"
      );
    });
    it("getEpisodesOfShow should call axios method", () => {
      ApiService.getEpisodesOfShow("121");
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://api.tvmaze.com/shows/121/episodes"
      );
    });
  });
  describe("ON FAIL", () => {
    let mockedAxios: Mocked<typeof axios>;
    beforeEach(async () => {
      mockedAxios = axios as Mocked<typeof axios>;
      mockedAxios.get.mockReset();
      mockedAxios.get.mockRejectedValueOnce({
        message: "some error",
      });
    });
    it("getAllShows should return error", () => {
      ApiService.getAllShows().catch((err) => {
        console.log("akid", err);
        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://api.tvmaze.com/shows"
        );
        expect(err.message).toBe("ApiService fetching shows error: some error");
      });
    });
    it("searchShows should return error", () => {
      ApiService.searchShows("mind").catch((err) => {
        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://api.tvmaze.com/search/shows?q=mind"
        );
        expect(err.message).toBe(
          "ApiService searching shows error: some error"
        );
      });
    });
    it("getShowDetails should return error", () => {
      ApiService.getShowDetails("1").catch((err) => {
        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://api.tvmaze.com/shows/1"
        );
        expect(err.message).toBe(
          "ApiService fetching show details error: some error"
        );
      });
    });
    it("getCrewOfShow should return error", () => {
      ApiService.getCrewOfShow("12").catch((err) => {
        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://api.tvmaze.com/shows/12/crew"
        );
        expect(err.message).toBe(
          "ApiService fetching show crews error: some error"
        );
      });
    });
    it("getEpisodesOfShow should return error", () => {
      ApiService.getEpisodesOfShow("121").catch((err) => {
        expect(mockedAxios.get).toHaveBeenCalledWith(
          "https://api.tvmaze.com/shows/121/episodes"
        );
        expect(err.message).toBe(
          "ApiService fetching show episodes error: some error"
        );
      });
    });
  });
});
