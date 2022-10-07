import { SortingKeys } from "@/types/sorting.model";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import { sortShows } from "./sort";

describe("sortShows", () => {
  it(" should return correct value", () => {
    expect(sortShows([], SortingKeys.RATING_ASCENDING)).toEqual([]);
  });
});