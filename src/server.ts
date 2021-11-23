import express, { NextFunction, Request, Response } from "express";
import swaggerUI from 'swagger-ui-express';

import swaggerFile from "./swagger.json";

import "reflect-metadata";
import './shared/container'
import './database';

import router from './routes';
import { AppErrors } from "./errors/AppErrors";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppErrors) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333, () => console.log("server rodando caralho"));
