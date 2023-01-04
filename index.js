// Packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Routes
const printersRoute = require("./routes/printers");

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
  apis: ["./routes/*.js"],
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

app.use("/printers", printersRoute);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/docs`);
});
