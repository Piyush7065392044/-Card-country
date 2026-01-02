import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getCountryData = () => {
  return api.get("independent?status=true&fields=languages,capital");
};
