"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./controllers/api");
const app = (0, express_1.default)();
const port = 3000;
app.set("port", process.env.PORT, port);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, api_1.loadEndPoints)(app);
exports.default = app;

