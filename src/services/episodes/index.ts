import api from "@/services/api";
import { apiFetch } from "@/services/apiFetch";
import { EpisodesResponse } from "./types";

export const fetchEpisodes = async (): Promise<EpisodesResponse> => {
  const { data } = await api.get("/episode");
  return data;
};

export const fetchEpisodesByPage = async (
  page: number
): Promise<EpisodesResponse> => {
  const { data } = await apiFetch<EpisodesResponse>(`/location/?page=${page}`);
  return data;
};
