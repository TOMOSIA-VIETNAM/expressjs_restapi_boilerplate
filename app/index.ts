import 'dotenv/config';
import 'reflect-metadata';
import { Database } from "../config/database/database";
import express, { Application } from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from 'fs';
import path from 'path';
import routes from './routes';
import helmet from 'helmet';
import cors from 'cors';
import '../lib/expressRes';

// create express app
const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../log/application.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


// register all application routes
app.use('/', routes);

app.use(function(err, req: Request, res: Response) {
    // Notification to Slack todo at here!!
    console.log(err);
});
// run app
app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

// establish database connection
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
Database
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
