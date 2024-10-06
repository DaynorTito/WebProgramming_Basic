import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import phraseRoutes from './routes/phraseRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/phrases', phraseRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor API escuchando en http://localhost:${port}`);
});