import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/property.routes';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/properties', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});