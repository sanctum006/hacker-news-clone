import { BASE_URL } from "./constants/index";

export const getPostsBySearchString = async (searchString) => {
  return fetch(`${BASE_URL}/search?query=${searchString}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getPostById = (id) => {
  return fetch(`${BASE_URL}/items/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
