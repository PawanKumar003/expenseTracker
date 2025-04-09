import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

// Load Swagger YAML file
// const swaggerDocument = YAML.load("./routes/userRoutes.swagger.yaml");

// Serve Swagger UI at /docs
// app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/users", userRouter);

export default app;
