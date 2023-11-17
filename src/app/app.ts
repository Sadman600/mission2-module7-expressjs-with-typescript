import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

const middleWare = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.path);
  next();
};
app.get("/", middleWare, (req: Request, res: Response) => {
  //   console.log(req.query);

  res.send("Hello World!");
});
app.get("/:userId", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello user");
});

app.post("/user", (req: Request, res: Response) => {
  console.log(req.body);

  res.send("data send sussess");
});

export default app;
