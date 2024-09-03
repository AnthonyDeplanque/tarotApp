// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getApi = (apiEndpoint: string): Promise<any> => {
  return fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => data);
};
