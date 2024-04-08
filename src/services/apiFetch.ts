import { traceSpan } from "@/helpers/tracing";
import api, { Options, Response } from "@/services/api";

/**
 * Makes a fetch request to the API.
 *
 * @param {string} url - The URL to fetch.
 * @param {Options} [options] - The options for the fetch request.
 * @returns {Promise<Response<T>>} - A promise that resolves to the API response.
 * @throws {Error} - If an error occurs during the fetch request.
 */
export const apiFetch = async <T extends {}>(
  url: string,
  options?: Options
): Promise<Response<T>> => {
  if (options?.method !== "GET") {
    options!.headers = {
      ...options?.headers,
      "Content-Type": "application/json",
    };
  }

  return traceSpan(url, async () => {
    try {
      const response = await api(url, options);

      if (response.status > 299) {
        return Promise.reject();
      }

      const contentType = response.headers["content-type"];
      if (contentType && contentType.includes("application/json")) {
        return Promise.resolve(response);
      }

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  });
};
