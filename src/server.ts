import express, { type Request, type Response } from "express"

const app = express()

const port = 5000;

app.get("/", (req:Request, res: Response) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

