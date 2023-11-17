"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const middleWare = (req, res, next) => {
    console.log(req.url, req.path);
    next();
};
app.get("/", middleWare, (req, res) => {
    //   console.log(req.query);
    res.send("Hello World!");
});
app.get("/:userId", (req, res) => {
    console.log(req.params);
    res.send("Hello user");
});
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("data send sussess");
});
exports.default = app;
