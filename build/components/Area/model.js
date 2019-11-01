"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
const shortid = require("shortid");
/**
 * @swagger
 * components:
 *  schemas:
 *    AreaSchema:
 *      required:
 *        - name
 *        - domainName
 *      properties:
 *        name:
 *          type: string
 *        domainName:
 *          type: string
 *    Areas:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/AreaSchema'
 */
const AreaSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name: {
        type: String,
        unique: true,
        trim: true
    },
    domain: {
        type: String,
        ref: 'DomainModel',
    },
}, {
    collection: 'areamodel',
    versionKey: false
});
exports.default = connections.db.model('AreaModel', AreaSchema);
//# sourceMappingURL=model.js.map