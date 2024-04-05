import { useQuery } from "@tanstack/react-query";

import { CharacterResponse } from "./types";
import { fetchCharacters } from "./requests";

const QUERY_KEY = ["Character"];

export const useGetCharacter = () => {
  return useQuery<CharacterResponse, Error>({
    queryKey: QUERY_KEY,
    queryFn: fetchCharacters,
  });
};
