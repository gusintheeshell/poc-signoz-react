import { apiFetch } from "@/services/apiFetch";
import { LocationsResponse } from "@/services/locations/types";

export const fetchLocations = async (): Promise<LocationsResponse> => {
  const { data } = await apiFetch<LocationsResponse>("/location");
  return data;
};
