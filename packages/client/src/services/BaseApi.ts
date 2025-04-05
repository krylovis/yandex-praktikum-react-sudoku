export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const fetchWithCookies = async <T>(url: string, options?: object) : Promise<T> => {
  const response = await fetch(url, {
    ...options,
    credentials: 'include',
  });
  return handleResponse(response);
};
