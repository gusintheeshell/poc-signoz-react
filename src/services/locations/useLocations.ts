import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import { fetchLocations, fetchLocationsByPage } from "./";
import { LocationsResponse } from "./types";

export const QUERY_KEY_LOCATIONS = ["Locations"];

export const useGetLocations = (
  options?: UseQueryOptions<LocationsResponse, Error>
) => {
  return useQuery<LocationsResponse, Error>({
    queryKey: QUERY_KEY_LOCATIONS,
    queryFn: fetchLocations,
    ...options,
  });
};

export const useGetLocationByPage = (pageNumber: number) => {
  return useInfiniteQuery<LocationsResponse, Error>({
    queryKey: ["Character", pageNumber],
    queryFn: () => fetchLocationsByPage(pageNumber),
    initialPageParam: 1,
    getNextPageParam: ({ info: { next } }) => {
      return next;
    },
  });
};
