import {
  fetchShowDetailsFacade,
  fetchShowCrewFacade,
  fetchShowEpisodesFacade,
} from "@/composables/fetch-show-details";
import ApiService from "@/services/api-service";
import { watchEffect } from "vue";

describe("fetchShowDetailsFacade", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should call getShowDetails method from api", () => {
    vi.spyOn(ApiService, "getShowDetails");
    fetchShowDetailsFacade("12");
    expect(ApiService.getShowDetails).toHaveBeenCalledWith("12");
  });
  it("should handle error", async () => {
    vi.spyOn(ApiService, "getShowDetails").mockRejectedValue("some error");
    const { error } = fetchShowDetailsFacade("1");
    expect(ApiService.getShowDetails).toHaveBeenCalled();
    watchEffect(() => {
      if (error.value) {
        expect(error.value).toEqual("some error");
      }
    });
  });
});

describe("fetchShowCrewFacade", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should call getCrewOfShow method from api", () => {
    vi.spyOn(ApiService, "getCrewOfShow");
    fetchShowCrewFacade("12");
    expect(ApiService.getCrewOfShow).toHaveBeenCalledWith("12");
  });
  it("should handle error", async () => {
    vi.spyOn(ApiService, "getCrewOfShow").mockRejectedValue("some error");
    const { error } = fetchShowCrewFacade("1");
    expect(ApiService.getCrewOfShow).toHaveBeenCalled();
    watchEffect(() => {
      if (error.value) {
        expect(error.value).toEqual("some error");
      }
    });
  });
});

describe("fetchShowEpisodesFacade", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should call getEpisodesOfShow method from api", () => {
    vi.spyOn(ApiService, "getEpisodesOfShow");
    fetchShowEpisodesFacade("12");
    expect(ApiService.getEpisodesOfShow).toHaveBeenCalledWith("12");
  });
  it("should handle error", async () => {
    vi.spyOn(ApiService, "getEpisodesOfShow").mockRejectedValue("some error");
    const { error } = fetchShowEpisodesFacade("1");
    expect(ApiService.getEpisodesOfShow).toHaveBeenCalled();
    watchEffect(() => {
      if (error.value) {
        expect(error.value).toEqual("some error");
      }
    });
  });
});
