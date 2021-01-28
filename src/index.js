import express from 'express';
import debug from './config/debug';
import path from 'path';
import routes from './routes';

global.__dirname = path.resolve('./');

const port = process.env.PORT || 2000;

const app = express();

app.use(routes);

app.listen(port, () => debug.log(`Running on http://localhost:${ port }`));
