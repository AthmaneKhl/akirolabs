import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { validateToken } from "./validator/validator";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,access-control-allow-origin"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("express server");
});

app.get("/validate/:token", (req: Request, res: Response) => {
  res.send(validateToken(req.params.token));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
