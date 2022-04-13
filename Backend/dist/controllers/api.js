"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEndPoints = void 0;
const loadEndPoints = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send([
            {
                codigo: "1", student: "Joan"
            }
        ]);
    });
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
};
exports.loadEndPoints = loadEndPoints;
