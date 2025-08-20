import express from 'express';
import cors from 'cors';
import path from 'path';

import superheroRoutes from './routes/superhero.routes';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (_, res) => {
	res.send('API is running');
});

app.use('/api/heroes', superheroRoutes);

export const server = app.listen(4000, () =>
	console.log('Server running on http://localhost:4000'),
);

export default app;
