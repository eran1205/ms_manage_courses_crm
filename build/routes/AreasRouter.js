"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("../components");
/**
 * @constant {express.Router}
 */
const router = express_1.Router();
/**
 * GET method route
 * @example http://localhost:PORT/v1/areas
 *
 * @swagger
 * /v1/areas:
 *   get:
 *     description: Get all stored areas in Database
 *     tags: ["areas"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of areas
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Areas'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.AreaComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/areas
 *
 * @swagger
 * /v1/areas:
 *   post:
 *      description: Create new Area
 *      tags: ["areas"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        name: area creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AreaSchema'
 *            example:
 *              name: areaName
 *      responses:
 *        201:
 *          description: return created area
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/AreaSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.AreaComponent.create);
/**
 * GET method route
 * @example http://localhost:PORT/v1/areas/:id
 *
 * @swagger
 * /v1/areas/{id}:
 *  get:
 *    description: Get area by id
 *    tags: ["areas"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return area by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AreaSchema'
 */
router.get('/:id', components_1.AreaComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/areas/:id
 *
 * @swagger
 * /v1/areas/{id}:
 *  delete:
 *    description: Delete area by id
 *    tags: ["areas"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted area
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/AreaSchema'
 */
router.delete('/:id', components_1.AreaComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=AreasRouter.js.map