// https://restcountries.com/v3.1/region/ASIA
const { API_URL } = process.env;
import axios from "axios"; // axios is used for hitting api's
const runFunction = (
  area,
  sort = "ascending",
  pageNumber = 1,
  pageSize = 5,
  res
) => {
  let url = `${API_URL}/v3.1/region/${area}`;
  //   https://restcountries.com/v3.1/lang/english
  axios
    .get(url)
    .then(function (response) {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      let names = response.data.map((value) => {
        return value.name.common;
      });

      let result =
        sort === "descending" ? names.sort().reverse() : names.sort();

      const paginatedData = result.slice(startIndex, endIndex);
      res.status(200).send({
        totalItems: result.length,
        page: pageNumber,
        pageSize: pageSize,
        totalPages: Math.ceil(result.length / pageSize),
        data: paginatedData,
      });
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.data);
      res.status(400).send({
        message: "The Area provided is not correct or is missing",
        err: error.message,
      });
    })
    .finally(function () {});
};

export const getCountriesByArea = (req, res) => {
  runFunction(
    req.query.area,
    req.query.sort,
    req.query.page,
    req.query.pageSize,
    res
  );
};
