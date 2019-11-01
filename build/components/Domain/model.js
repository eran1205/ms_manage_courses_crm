"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connections = require("../../config/connection/connection");
const shortid = require("shortid");
/**
 * @swagger
 * components:
 *  schemas:
 *    DomainSchema:
 *      required:
 *        - name
 *      properties:
 *        name:
 *          type: string
 *    Domains:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/DomainSchema'
 */
const DomainSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name: {
        type: String,
        unique: true,
        trim: true
    },
}, {
    collection: 'domainmodel',
    versionKey: false
});
exports.default = connections.db.model('DomainModel', DomainSchema);
//# sourceMappingURL=model.js.map