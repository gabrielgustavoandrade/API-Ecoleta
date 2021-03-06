import express from 'express';
import bodyParser from 'body-parser'
import path from 'path';
import routes from './routes';
import cors from 'cors';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);