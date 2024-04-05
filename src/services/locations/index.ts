import api from "@/services/api";
import { LocationsResponse } from "../locations/types";

export const fetchLocations = async (): Promise<LocationsResponse> => {
  const { data } = await api.get("/location");
  return data;
};
