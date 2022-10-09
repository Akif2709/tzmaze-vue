import { fetchShowsFacade } from "@/composables/fetch-shows";
import ApiService from "@/services/api-service";
import { ref, watchEffect } from "vue";

describe("fetchShowsFacade", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it("should call searchShows method from api if there is a query", () => {
    vi.spyOn(ApiService, "searchShows");
    fetchShowsFacade(ref("12"));
    expect(ApiService.searchShows).toHaveBeenCalledWith("12");
  });
  it("should call getAllShows method from api if there is a query", async () => {
    const mockValue = [{ id: 1 } as any];
    vi.spyOn(ApiService, "getAllShows").mockResolvedValue(mockValue);
    const { shows } = fetchShowsFacade(ref(""));
    expect(ApiService.getAllShows).toHaveBeenCalled();
    watchEffect(() => {
      if (shows.value) {
        expect(shows.value).toEqual(mockValue);
      }
    });
  });
  it("should handle error", async () => {
    vi.spyOn(ApiService, "getAllShows").mockRejectedValue("some error");
    const { error } = fetchShowsFacade(ref(""));
    expect(ApiService.getAllShows).toHaveBeenCalled();
    watchEffect(() => {
      if (error.value) {
        expect(error.value).toEqual("some error");
      }
    });
  });
});
