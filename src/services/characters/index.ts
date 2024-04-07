import api from "../api";
import { apiFetch } from "@/services/apiFetch";
import { CharacterResponse } from "./types";

export const fetchCharacters = async (): Promise<CharacterResponse> => {
  const { data } = await api.get("/character");
  return data;
};

export const fetchCharactersByPage = async (
  page: number
): Promise<CharacterResponse> => {
  const { data } = await apiFetch<CharacterResponse>(
    `/character/?page=${page}`
  );
  return data;
};
