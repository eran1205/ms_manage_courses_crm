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
 * @example http://localhost:PORT/v1/domains
 *
 * @swagger
 * /v1/domains:
 *   get:
 *     description: Get all stored domains in Database
 *     tags: ["domains"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of domains
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Domains'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', components_1.DomainComponent.findAll);
/**
 * POST method route
 * @example http://localhost:PORT/v1/domains
 *
 * @swagger
 * /v1/domains:
 *   post:
 *      description: Create new Domain
 *      tags: ["domains"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        name: domain creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/DomainSchema'
 *            example:
 *              name: domainName
 *      responses:
 *        201:
 *          description: return created domain
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/DomainSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', components_1.DomainComponent.create);
/**
 * GET method route
 * @example http://localhost:PORT/v1/domains/:id
 *
 * @swagger
 * /v1/domains/{id}:
 *  get:
 *    description: Get domain by id
 *    tags: ["domains"]
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
 *        description: return domain by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/DomainSchema'
 */
router.get('/:id', components_1.DomainComponent.findOne);
/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/domains/:id
 *
 * @swagger
 * /v1/domains/{id}:
 *  delete:
 *    description: Delete domain by id
 *    tags: ["domains"]
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
 *        description: return deleted domain
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/DomainSchema'
 */
router.delete('/:id', components_1.DomainComponent.remove);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=DomainRouter.js.map