import express, { NextFunction, Request, Response, Router } from "express";

const app = express();
const birdRouter = express.Router();
const animalRouter = express.Router();

app.use(express.json());
app.use("/api/v1", birdRouter);
app.use("/api/v1", animalRouter);

const middleWare = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.path);
  next();
};

// GET method route
animalRouter.get("/animal", (req: Request, res: Response) => {
  res.send("GET request to the animal");
});
// POST method route
animalRouter.post("/animal", (req: Request, res: Response) => {
  res.send("POST request to the animal");
});

app.get("/");
app
  .route("/book")
  .get((req: Request, res: Response) => {
    res.send("Get a random book");
  })
  .post((req: Request, res: Response) => {
    res.send("Add a book");
  });

birdRouter.get("/bird", (req: Request, res: Response) => {
  const birds = req.body;
  res.json({
    success: true,
    data: birds,
  });
});
export default app;
