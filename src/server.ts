// Packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
require("dotenv").config();

// Routes
import printersRoute from "./printers/endpoints";

// Environment variables
const port = process.env.PORT || 4000;

// Other constants
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UTDesign Makerspace API",
      version: "1.0.0",
      description: "Documentation for the UTDesign Makerspace API",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "X-API-KEY",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["./**/endpoints.ts"],
};
const specs = swaggerJsDoc(options);
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, {
    swaggerOptions: {
      defaultModelRendering: "model",
      defaultModelsExpandDepth: 100,
      defaultModelExpandDepth: 100,
    },
  })
);

app.use("/v1/printers", printersRoute);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/docs`);
});
