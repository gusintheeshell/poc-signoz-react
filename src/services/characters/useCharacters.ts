import {
  useInfiniteQuery,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

import { CharacterResponse } from "./types";
import { fetchCharacters, fetchCharactersByPage } from ".";

export const QUERY_KEY_CHARACTER = ["Character"];

export const useGetCharacter = (
  options?: UseQueryOptions<CharacterResponse, Error>
) => {
  return useQuery<CharacterResponse, Error>({
    queryKey: QUERY_KEY_CHARACTER,
    queryFn: () => fetchCharacters(),
    ...options,
  });
};

export const useGetCharacterByPage = (pageNumber: number) => {
  return useInfiniteQuery<CharacterResponse, Error>({
    queryKey: ["Character", pageNumber],
    queryFn: () => fetchCharactersByPage(pageNumber),
    initialPageParam: 1,
    getNextPageParam: ({ info: { next } }) => {
      return next;
    },
  });
};
