import { camelCase } from "lodash";
import { toast } from "react-toastify";

const API_BASE_URL = "/api";

const handleResponseError = (response: Response) => {
  if (response.status === 401) {
    localStorage.removeItem("accessToken");
    window.location.replace("/login");
    return;
  }
  toast.error(`Request failed: ${response.status}`);
};

export const apiClient = async (
  url: string,
  method: string = "GET",
  body?: any
) => {
  const accessToken = localStorage.getItem("accessToken");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken};`;
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    handleResponseError(response);
    return;
  }

  if (response.status === 204) {
    return;
  }

  const result = await response.json();

  return typeof result === "object" ? camelCaseKeys(result) : result;
};

const camelCaseKeys = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map((value) => camelCaseKeys(value));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
      const camelCaseKey = camelCase(key);
      newObj[camelCaseKey] = camelCaseKeys(obj[key]);
    }
    return newObj;
  }
  return obj;
};
