"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const birdRouter = express_1.default.Router();
const animalRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use("/api/v1", birdRouter);
app.use("/api/v1", animalRouter);
const middleWare = (req, res, next) => {
    console.log(req.url, req.path);
    next();
};
// GET method route
animalRouter.get("/animal", (req, res) => {
    res.send("GET request to the animal");
});
// POST method route
animalRouter.post("/animal", (req, res) => {
    res.send("POST request to the animal");
});
app.get("/");
app
    .route("/book")
    .get((req, res) => {
    res.send("Get a random book");
})
    .post((req, res) => {
    res.send("Add a book");
});
birdRouter.get("/bird", (req, res) => {
    const birds = req.body;
    res.json({
        success: true,
        data: birds,
    });
});
exports.default = app;
