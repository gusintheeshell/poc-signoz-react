import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { CharacterResponse } from "./types";
import { fetchCharacters } from ".";

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
