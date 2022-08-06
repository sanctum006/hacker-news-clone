import { BASE_URL } from "./constants/index";

export const getPostsBySearchString = (searchString) => {
  fetch(`${BASE_URL}/search?query=${searchString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getPostById = (id) => {
  fetch(`${BASE_URL}/items/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
