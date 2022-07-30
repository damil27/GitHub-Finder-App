import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const { items } = await response.json();

  return items;
};

export const getUser = async (login) => {
  const res = await fetch(`https://api.github.com/users/${login}`);

  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    const result = await res.json();

    return result;
  }
};

// get repository function
export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(
    `https://api.github.com/users/${login}/repos?${params}`
  );
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const result = await response.json();

    return result;
  }
};
