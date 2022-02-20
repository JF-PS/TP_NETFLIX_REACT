import Axios from "axios";

const API = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/movie`,
});

export const fetchApi = (query, methode) => {
  return new Promise((resolve, reject) => {
    API[methode](`${query}api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        console.debug(err);
        reject(err);
      });
  });
};
