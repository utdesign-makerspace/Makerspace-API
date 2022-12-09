// Packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Routes
const pingRoute = require("./routes/ping");

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
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/ping", pingRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
