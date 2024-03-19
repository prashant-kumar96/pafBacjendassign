const { API_URL } = process.env;
import axios from "axios"; // axios is used for hitting api's
const runFunction = (country, res) => {
  let url = `${API_URL}/v3.1/name/${country}?fullText=true`;
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data);
      res.status(200).send({ data: response.data });
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.data);
      res.status(400).send({
        message:
          "The country name provided is not correct or parameter country is not provided properly",
        err: error.message,
      });
    })
    .finally(function () {
      // always executed
    });
};

export const countryInformation = (req, res) => {
  runFunction(req.query.country, res);
};
