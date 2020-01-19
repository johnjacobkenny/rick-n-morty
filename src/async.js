import { stringify } from "query-string";

export const getCharacter = options => {
  let url = "https://rickandmortyapi.com/api/character/";
  if (options) {
    const queryParams = stringify(options);
    url = `${url}?${queryParams}`;
  }
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(response => Promise.resolve({ error: true }));
};
