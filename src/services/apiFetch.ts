import { traceSpan } from "@/helpers/tracing";
import api, { Options, Response } from "@/services/api";

export const apiFetch = async <T extends {}>(
  url: string,
  options?: Options
): Promise<Response<T>> => {
  if (options && options.method && options.method !== "GET") {
    options.headers = Object.assign(options.headers || {}, {
      "Content-Type": "application/json",
    });
  }

  return traceSpan(url, async () => {
    try {
      const response = await api(url, options);

      if (response.status > 299) {
        return Promise.reject();
      }

      const contentType = response.headers["content-type"];
      if (contentType && contentType.includes("application/json")) {
        return Promise.resolve(response.data);
      }

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  });
};
