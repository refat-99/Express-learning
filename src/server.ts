import express, { type Request, type Response } from "express"
import { Pool } from "pg";

const app = express()

const port = 5000;

// middleware 
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//neon serverless postgres connection
const pool = new Pool({
    "connectionString": "postgresql://neondb_owner:npg_9NqVp0tnrgKh@ep-shy-scene-aq9dyybh.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require"
});

const initDB = async () => {
                try {
                    
                }
           
            catch (error) {}

         }
//get method for the root route

app.get("/", (req: Request, res: Response) => {
    // res.send("hello world");
    res.status(200).json({
        "message": "Express with TypeScript is working!",
        "author": "Next Level Web"
    })
});

// post method for the root route
app.post("/", async (req: Request, res: Response) => {

    // console.log(req.body);
    const {name, email, password} = req.body;
    res.status(201).json({
        "message": "POST request received!",
        "author": "Next Level Web",
        "data": {name, email}
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

