import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { fetchLocations } from "./";
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
