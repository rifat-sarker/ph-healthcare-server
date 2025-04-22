import express, { Application, request, response } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.route";
import { adminRoutes } from "./app/modules/Admin/admin.route";

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send("PH HealthCare");
});

// application/modules routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);

export default app;
