import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from './Lab5/QueryParameters.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';
import WorkingWithArrays from './Lab5/WorkingWithArrays.js';
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app);
WorkingWithArrays(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)