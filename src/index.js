import express from 'express';
import debug from './config/debug';
import path from 'path';
import routes from './routes';
import * as response from './lib/response';

global.__dirname = path.resolve('./');

const port = process.env.PORT || 2000;

const app = express();

app.use((req, res, next) =>
    express.json()(req, res, err => {
        if (err) return response.error(res, 400, "Invalid JSON payload passed.");
        next();
    })
);

app.use(routes);

app.listen(port, () => debug.log(`Running on http://localhost:${ port }`));
