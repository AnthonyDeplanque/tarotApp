// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleApiCall = (apiEndpoint: string): Promise<any> => {
  return fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => data);
};
