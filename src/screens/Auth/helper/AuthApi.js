import { API } from "../../../backend";
const axios = require("axios");

export const signin = () => {
  return axios
    .post(
      `${API}/auth/signin`,
      {
        password: "roshan",
        email: "roshan@gmail.com",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
