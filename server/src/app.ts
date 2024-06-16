import 'dotenv/config'
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  const port = process.env.PORT
  res.send('Hello World!'+port);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

