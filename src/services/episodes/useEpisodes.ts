import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { fetchEpisodes } from "./";
import { EpisodesResponse } from "./types";

export const QUERY_KEY_EPISODE = ["Episode"];

export const useGetEpisodes = (
  options?: UseQueryOptions<EpisodesResponse, Error>
) => {
  return useQuery<EpisodesResponse, Error>({
    queryKey: QUERY_KEY_EPISODE,
    queryFn: fetchEpisodes,
    ...options,
  });
};
