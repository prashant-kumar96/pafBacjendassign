import express from "express"; // express is used to reduce the lines of code for making a server
import "dotenv/config"; //we are importing values from .env file here

import loginRouter from "./routes/loginRouter.js";
import apiRouter from "./routes/apiRouter.js";
const app = express();
app.use(express.json()); // express.json is used to get req.body values

const { PORT, API_URL } = process.env; //here we are destructuring the values from .env file

app.use("/login", loginRouter); //we are making a loginRouter to seperate the login code
app.use("/api", apiRouter); // all other api's are defined in apiRouter

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT", PORT);
}); //this code is used to start the server locally on port which we are getting from .env
