const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ping
 *   description: Ping the server
 */

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Ping the server
 *     tags: [Ping]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pong!
 */

router.get("/", (req, res) => {
  res.send({ message: "Pong!" });
});

module.exports = router;
