const { API_URL } = process.env;
import axios from "axios"; // axios is used for hitting api's
const runFunction = (
  filter = "greaterThan",
  value = 0,
  pageNumber = 1,
  pageSize = 5,
  res
) => {
  let url = `${API_URL}/v3.1/all?fields=population,name`;
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

      console.log(result);
      if (filter === "largest") {
        let largest = 0;
        let countryname = "";
        result.forEach((value) => {
          if (value.population > largest) {
            largest = value.population;
            countryname = value.name;
          }
        });

        console.log(largest);
        console.log(countryname);
      } else if (filter === "smallest") {
        let smallest = result[0].population;
        let countryname = result[0].name;
        result.forEach((value) => {
          if (value.population < smallest) {
            smallest = value.population;
            countryname = value.name;
          }
        });
        console.log(smallest);
        console.log(countryname);
      }
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
        message: "Some information missing",
        err: error.message,
      });
    })
    .finally(function () {});
};

export const getCountriesByPopulation = (req, res) => {
  runFunction(
    req.query.filter,
    req.query.value,
    req.query.page,
    req.query.pageSize,
    res
  );
};
