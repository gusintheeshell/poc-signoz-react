import { apiFetch } from "@/services/apiFetch";
import { LocationsResponse } from "@/services/locations/types";

/**
 * Fetches locations from the API.
 *
 * @returns {Promise<LocationsResponse>} A promise that resolves to the locations response.
 */
export const fetchLocations = async (): Promise<LocationsResponse> => {
  const { data } = await apiFetch<LocationsResponse>("/location");
  return data;
};

/**
 * Fetches locations by page number.
 *
 * @param page - The page number to fetch locations from.
 * @returns A promise that resolves to a LocationsResponse object.
 */
export const fetchLocationsByPage = async (
  page: number
): Promise<LocationsResponse> => {
  const { data } = await apiFetch<LocationsResponse>(`/location/?page=${page}`);
  return data;
};
