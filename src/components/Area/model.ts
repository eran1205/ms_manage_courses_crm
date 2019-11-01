import { Document, Schema, SchemaTypes, Types } from 'mongoose';
import * as connections from '../../config/connection/connection';
import * as shortid from 'shortid';

/**
 * @export
 * @interface IAreaModel
 * @extends {Document}
 */
export interface IAreaModel extends Document {
    
    name: string;
    domain: string;
}

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
const AreaSchema: Schema = new Schema({
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
        type:String, 
        ref:'DomainModel', 
    },
}, {
    collection: 'areamodel',
    versionKey: false
});

export default connections.db.model < IAreaModel > ('AreaModel', AreaSchema);
