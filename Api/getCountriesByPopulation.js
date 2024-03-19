const { API_URL } = process.env;
import axios from "axios"; // axios is used for hitting api's
const runFunction = (
  filter = "greaterThan",
  providedValue = 0,
  pageNumber = 1,
  pageSize = 5,
  res
) => {
  let url = `${API_URL}/v3.1/all?fields=population,name`;
  console.log(filter);
  console.log(providedValue);
  axios
    .get(url)
    .then(function (response) {
      const startIndex = (pageNumber - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      let result = response.data.map((value) => {
        return {
          name: value.name.common,
          population: value.population,
        };
      });
      // here the result has array of object with all countries name and its  population

      // console.log(result);
      if (filter === "largest") {
        let largest = 0;
        let countryname = "";
        result.forEach((value) => {
          if (value.population > largest) {
            largest = value.population;
            countryname = value.name;
          }
        });

        res.status(200).json({ countryName: countryname, population: largest });
      } else if (filter === "smallest") {
        let smallest = result[0].population;
        let countryname = result[0].name;
        result.forEach((value) => {
          if (value.population < smallest) {
            smallest = value.population;
            countryname = value.name;
          }
        });

        res
          .status(200)
          .json({ countryName: countryname, population: smallest });
      } else if (filter === "greaterThan") {
        const requiredResult = result.map((value) => {
          if (value.population > providedValue) {
            return value;
          }
        });

        const paginatedData = requiredResult?.slice(startIndex, endIndex);
        res.status(200).send({
          totalItems: requiredResult.length,
          page: pageNumber,
          pageSize: pageSize,
          totalPages: Math.ceil(requiredResult.length / pageSize),
          data: paginatedData,
        });
      } else if (filter === "smallerThan") {
        const requiredResult = result.map((value) => {
          if (value.population < providedValue) {
            return value;
          }
        });

        const paginatedData = requiredResult.slice(startIndex, endIndex);
        res.status(200).send({
          totalItems: requiredResult.length,
          page: pageNumber,
          pageSize: pageSize,
          totalPages: Math.ceil(requiredResult.length / pageSize),
          data: paginatedData,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.data);
      res.status(400).send({
        message: "Some information missing",
        err: error.message,
      });
    })
    .finally(function () {});
};

export const getCountriesByPopulation = (req, res) => {
  runFunction(
    req.query.filter,
    req.query.providedValue,
    req.query.page,
    req.query.pageSize,
    res
  );
};
