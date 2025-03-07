import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import PathParameters from "./Lab5/PathParameters.js";
import QueryParameters from './Lab5/QueryParameters.js';
import WorkingWithObjects from './Lab5/WorkingWithObjects.js';

const app = express()
PathParameters(app);
QueryParameters(app);
WorkingWithObjects(app)
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000)