import express from "express";
import { isAuth } from "../auth/lib";
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Printer:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - model
 *         - thumbnail
 *         - emoji
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the printer, typically a web-safe version of the name
 *         name:
 *           type: string
 *           description: The name of the printer
 *         model:
 *           type: string
 *           description: The model of the printer
 *         thumbnail:
 *           type: string
 *           description: The link to a thumbnail image of the printer
 *         emoji:
 *           type: string
 *           description: The Discord emoji of the printer, primarily used for BitBot
 *     PrinterFull:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - model
 *         - thumbnail
 *         - emoji
 *         - status
 *         - ip
 *         - ssl
 *       properties:
 *         id:
 *           type: string
 *           description: The ID of the printer, typically a web-safe version of the name
 *         name:
 *           type: string
 *           description: The name of the printer
 *         model:
 *           type: string
 *           description: The model of the printer
 *         thumbnail:
 *           type: string
 *           description: The link to a thumbnail image of the printer
 *         emoji:
 *           type: string
 *           description: The Discord emoji of the printer, primarily used for BitBot
 *         status:
 *           type: string
 *           description: The status of the printer
 *         ip:
 *           type: string
 *           description: The IP address of the printer
 *         ssl:
 *           type: boolean
 *           description: Whether the printer uses SSL
 *         snapshot:
 *           type: string
 *           description: The snapshot of the printer encoded in base64
 *       example:
 *         id: "red"
 *         name: "Red"
 *         model: "Ender-3 Pro"
 *         thumbnail: "https://i.imgur.com/18fhzLl.png"
 *         emoji: "🔴"
 *         status: "Operational"
 *         ip: "192.168.1.1"
 *         ssl: false
 *         snapshot: "data:image/png;base64,iVBORw0KGgoAAAA..."
 */

/**
 * @swagger
 * tags:
 *   name: 3D Printers
 *   description: Anything related to OctoPrint
 */

/**
 * @swagger
 * /v1/printers:
 *   get:
 *     summary: Get the information of all 3D printers
 *     tags: [3D Printers]
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
 *                    - id: "red"
 *                      name: "Red"
 *                      model: "Ender-3 Pro"
 *                      thumbnail: "https://i.imgur.com/18fhzLl.png"
 *                      emoji: "🔴"
 */

router.get("/", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

/**
 * @swagger
 * /v1/printers/{id}:
 *   get:
 *     summary: Get the detailed information of a 3D printer
 *     parameters:
 *       - in : path
 *         name: id
 *         description: The ID of the printer, typically a web-safe version of the name
 *         schema:
 *           type: string
 *         required: true
 *       - in : query
 *         name: snapshot
 *         description: Whether to include the snapshot of the printer
 *         schema:
 *           type: boolean
 *         required: false
 *         default: false
 *     tags: [3D Printers]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrinterFull'
 */

router.get("/:id", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

/**
 * @swagger
 * /v1/printers:
 *   post:
 *     summary: Create a 3D printer in the database
 *     parameters:
 *       - in : body
 *         name: data
 *         description: The printer data
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - model
 *             - thumbnail
 *             - emoji
 *             - ip
 *             - ssl
 *             - apiKey
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the printer
 *             model:
 *               type: string
 *               description: The model of the printer
 *             thumbnail:
 *               type: string
 *               description: The link to a thumbnail image of the printer
 *             emoji:
 *               type: string
 *               description: The Discord emoji of the printer, primarily used for BitBot
 *             ip:
 *               type: string
 *               description: The IP address of the printer
 *             ssl:
 *               type: boolean
 *               description: Whether the printer uses SSL
 *             apiKey:
 *               type: string
 *               description: The API key of the printer
 *           example:
 *             name: "Red"
 *             model: "Ender-3 Pro"
 *             thumbnail: "https://i.imgur.com/18fhzLl.png"
 *             emoji: "🔴"
 *             ip: "192.168.1.1"
 *             ssl: false
 *             apiKey: "1234567890abcdef"
 *     tags: [3D Printers]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrinterFull'
 */

router.post("/", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

/**
 * @swagger
 * /v1/printers/{id}:
 *   patch:
 *     summary: Update a 3D printer in the database
 *     parameters:
 *       - in : path
 *         name: id
 *         description: The ID of the printer, typically a web-safe version of the name
 *         schema:
 *           type: string
 *           required: true
 *       - in : body
 *         name: data
 *         description: The printer data
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the printer
 *             model:
 *               type: string
 *               description: The model of the printer
 *             thumbnail:
 *               type: string
 *               description: The link to a thumbnail image of the printer
 *             emoji:
 *               type: string
 *               description: The Discord emoji of the printer, primarily used for BitBot
 *             ip:
 *               type: string
 *               description: The IP address of the printer
 *             ssl:
 *               type: boolean
 *               description: Whether the printer uses SSL
 *             apiKey:
 *               type: string
 *               description: The API key of the printer
 *           example:
 *             name: "Red"
 *             model: "Ender-3 Pro"
 *             thumbnail: "https://i.imgur.com/18fhzLl.png"
 *             emoji: "🔴"
 *             ip: "192.168.1.1"
 *             ssl: false
 *             apiKey: "1234567890abcdef"
 *     tags: [3D Printers]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrinterFull'
 */

router.patch("/:id", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

/**
 * @swagger
 * /v1/printers/{id}:
 *   delete:
 *     summary: Remove a 3D printer from the database
 *     parameters:
 *       - in : path
 *         name: id
 *         description: The ID of the printer, typically a web-safe version of the name
 *         schema:
 *           type: string
 *           required: true
 *     tags: [3D Printers]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PrinterFull'
 */

router.delete("/:id", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

/**
 * @swagger
 * /v1/printers/names:
 *   get:
 *     summary: Get the names of all 3D printers, useful for dropdowns
 *     tags: [3D Printers]
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
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The ID of the printer, typically a web-safe version of the name
 *                       name:
 *                         type: string
 *                         description: The name of the printer
 *                   example:
 *                    - id: "red"
 *                      name: "Red"
 */

router.get("/names", isAuth, (req, res) => {
  res.send({ message: "Pong!" });
});

export default router;
