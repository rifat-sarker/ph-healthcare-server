import express, { Application, request, response } from "express";
import cors from "cors"
import { userRoutes } from "./app/modules/User/user.route";

const app:Application = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response)=> {
    response.send("PH HealthCare")
})


// application/modules routes
app.use('/api/v1/user', userRoutes)

export default app;