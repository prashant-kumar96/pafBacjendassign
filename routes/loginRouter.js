import express from "express";
const loginRouter = express.Router();
const { user_name, password, userid, JWT_SECRET_KEY } = process.env;
import jwt from "jsonwebtoken";

// this api is created to create a token
loginRouter.post("/", (req, res) => {
  try {
    const recievedUsername = req?.body?.username;
    const recievedPassword = req?.body?.password;
    // we are using the username, password and userid  from the .env file
    if (recievedUsername?.length === 0 || recievedPassword?.length === 0) {
      res
        .status(400)
        .json({ message: `Please provide a username and/or password ` });
    } else if (user_name !== recievedUsername) {
      res.status(400).json({
        message: `user with username: ${recievedUsername} does not exist `,
      });
    } else if (
      user_name === recievedUsername &&
      password !== recievedPassword
    ) {
      res.status(400).json({ message: `password is incorrect` });
    } else if (
      user_name === recievedUsername &&
      password === recievedPassword
    ) {
      const token = jwt.sign({ userId: userid }, JWT_SECRET_KEY, {
        expiresIn: "6h",
      });

      res.status(200).json({
        message:
          "Login successful! Please send the bearer token with other api's",
        statusCode: 200,
        token: token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err, statusCode: 400 });
  }
});

export default loginRouter;
