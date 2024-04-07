import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import { fetchEpisodes, fetchEpisodesByPage } from "./";
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

export const useGetEpisodesByPage = (pageNumber: number) => {
  return useInfiniteQuery<EpisodesResponse, Error>({
    queryKey: ["Character", pageNumber],
    queryFn: () => fetchEpisodesByPage(pageNumber),
    initialPageParam: 1,
    getNextPageParam: ({ info: { next } }) => {
      return next;
    },
  });
};
