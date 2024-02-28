import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

const port: Number = 8200;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello everyone');
});

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})