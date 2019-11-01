import { Document, Schema } from 'mongoose';
import * as connections from '../../config/connection/connection';
import * as shortid from 'shortid';

/**
 * @export
 * @interface IDomainModel
 * @extends {Document}
 */
export interface IDomainModel extends Document {
    name: string;
}

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
const DomainSchema: Schema = new Schema({
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

export default connections.db.model < IDomainModel > ('DomainModel', DomainSchema);
