import api from "@/services/api";

import { CharacterResponse } from "./types";

export const fetchCharacters = async (): Promise<CharacterResponse> => {
  const { data } = await api.get("/character");
  return data;
};

export const fetchCharactersByPage = async (
  page: number
): Promise<CharacterResponse> => {
  const { data } = await api.get(`/character/?page=${page}`);
  return data;
};
