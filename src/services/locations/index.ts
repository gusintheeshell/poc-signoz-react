import { apiFetch } from "@/services/apiFetch";
import { LocationsResponse } from "@/services/locations/types";

export const fetchLocations = async (): Promise<LocationsResponse> => {
  const response = await apiFetch<LocationsResponse>("/location");
  return response;
};

export const fetchLocationsByPage = async (
  page: number
): Promise<LocationsResponse> => {
  const response = await apiFetch<LocationsResponse>(`/location/?page=${page}`);
  return response;
};
