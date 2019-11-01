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
 * @example http://localhost:PORT/v1/topics
 *
 * @swagger
 * /v1/topics:
 *   get:
 *     description: Get all stored topics in Database
 *     tags: ["topics"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of topics
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Topics'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.TopicComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/topics
 *
 * @swagger
 * /v1/topics:
 *   post:
 *      description: Create new Topic
 *      tags: ["topics"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        name: topic creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TopicSchema'
 *            example:
 *              name: topicName
 *              area: _id of the area
 *              description: short description
 *              length: duration of the topic (hours)
 *      responses:
 *        201:
 *          description: return created topic
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/TopicSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.TopicComponent.create);
/**
 * GET method route
 * @example http://localhost:PORT/v1/topics/:id
 *
 * @swagger
 * /v1/topics/{id}:
 *  get:
 *    description: Get topic by id
 *    tags: ["topics"]
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
 *        description: return topic by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/TopicSchema'
 */
router.get('/:id', components_1.TopicComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/topics/:id
 *
 * @swagger
 * /v1/topics/{id}:
 *  delete:
 *    description: Delete topic by id
 *    tags: ["topics"]
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
 *        description: return deleted topic
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/TopicSchema'
 */
router.delete('/:id', components_1.TopicComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=TopicRouter.js.map