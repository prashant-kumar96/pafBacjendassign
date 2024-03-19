import express from "express";
import jwt from "jsonwebtoken";
import { countryInformation } from "../Api/countryInformation.js";
import { getCountriesByLanguage } from "../Api/getCountriesByLanguage.js";
import { getCountriesByArea } from "../Api/getCountriesByArea.js";
import { getCountriesByPopulation } from "../Api/getCountriesByPopulation.js";

const apiRouter = express.Router();
const { JWT_SECRET_KEY } = process.env;

// This verifytoken function is used to verify whether a token that we passed to the user during login , has been providded or not. It will stop the api if valid token is not provided

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  const token1 = token?.split(" ")[1]; // the token string has bearer substring in the begginning, so we need to get the 2nd substring after the space in the token string
  if (!token)
    return res.status(401).json({ error: "Token Not Provided. Access denied" });
  try {
    const decoded = jwt.verify(token1, JWT_SECRET_KEY);
    req.userid = decoded.userid;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid token" });
  }
};

apiRouter.get("/countryInformation", verifyToken, (req, res) => {
  countryInformation(req, res);
});

apiRouter.get("/getCountriesByLanguage", verifyToken, (req, res) => {
  getCountriesByLanguage(req, res);
});

apiRouter.get("/getCountriesByArea", verifyToken, (req, res) => {
  getCountriesByArea(req, res);
});

apiRouter.get("/getCountriesByPopulation", verifyToken, (req, res) => {
  getCountriesByPopulation(req, res);
});

export default apiRouter;
