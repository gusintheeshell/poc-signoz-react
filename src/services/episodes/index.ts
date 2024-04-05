import api from "@/services/api";
import { EpisodesResponse } from "./types";

export const fetchEpisodes = async (): Promise<EpisodesResponse> => {
  const { data } = await api.get("/episode");
  return data;
};
