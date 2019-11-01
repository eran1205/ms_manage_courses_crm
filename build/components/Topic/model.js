"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../../config/connection/connection");
const mongoose_1 = require("mongoose");
const shortid = require("shortid");
/**
 * @swagger
 * components:
 *  schemas:
 *    TopicSchema:
 *      required:
 *        - name
 *        - areaName
 *        - length
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        area:
 *          type: string
 *        length:
 *          type: number
 *    Topics:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/TopicSchema'
 */
const TopicSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name: {
        type: String,
        unique: true,
        trim: true
    },
    area: {
        type: String,
        ref: 'AreaModel',
    },
    description: String,
    length: Number,
}, {
    collection: 'topcimodel',
    versionKey: false
});
exports.default = connections.db.model('TopicModel', TopicSchema);
//# sourceMappingURL=model.js.map