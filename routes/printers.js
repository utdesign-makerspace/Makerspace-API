const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Printer:
 *       type: object
 *       required:
 *         - name
 *         - model
 *         - color
 *         - thumbnail
 *         - emoji
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the printer
 *         model:
 *           type: string
 *           description: The model of the printer
 *         color:
 *           type: string
 *           description: The color of the printer
 *         thumbnail:
 *           type: string
 *           description: The link to a thumbnail image of the printer
 *         emoji:
 *           type: string
 *           description: The Discord emoji of the printer
 *         status:
 *           type: string
 *           description: The status of the printer
 *         snapshot:
 *           type: string
 *           description: The snapshot of the printer encoded in base64
 *         ip:
 *           type: string
 *           description: The IP address of the printer
 *         ssl:
 *           type: boolean
 *           description: Whether the printer uses SSL
 *         apikey:
 *           type: string
 *           description: The API key of the printer
 */

/**
 * @swagger
 * tags:
 *   name: 3D Printers
 *   description: Anything related to OctoPrint
 */

/**
 * @swagger
 * /printers:
 *   get:
 *     summary: Get the information of all 3D printers
 *     tags: [3D Printers]
 *     parameters:
 *      - in: query
 *        name: full
 *        schema:
 *          type: boolean
 *          default: false
 *        description: Whether to return the optional information of the printer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 1
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Printer'
 *                   example:
 *                    - name: "Red"
 *                      model: "Ender-3 Pro"
 *                      color: "#dd2e44"
 *                      image: "https://i.imgur.com/18fhzLl.png"
 *                      emoji: "🔴"
 */

router.get("/", (req, res) => {
  res.send({ message: "Pong!" });
});

module.exports = router;
