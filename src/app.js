import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";

import "./database";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
