import { Router } from 'express';
import { TopicComponent } from '../components';


/**
 * @constant {express.Router}
 */
const router: Router = Router();

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
router.get('/', TopicComponent.findAll);

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
router.post('/', TopicComponent.create);

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
router.get('/:id', TopicComponent.findOne);

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
router.delete('/:id', TopicComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
