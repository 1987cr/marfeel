import fetch from "./fetch";

const BASE_URL = "http://localhost:3001";

const fetchConfig = () => fetch(`${BASE_URL}/config`);

const fetchSection = section =>
  fetch(`${BASE_URL}/${section}`).then(({ articles }) => articles);

export default {
  fetchConfig,
  fetchSection
};
