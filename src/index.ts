import cors from 'cors';
import express, { Request, Response } from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import errorHandler from './middleware/ErrorHandlingMiddleware';
import router from './routes/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello, Express with TypeScript!' });
});

// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
