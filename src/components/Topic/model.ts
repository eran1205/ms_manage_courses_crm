import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import * as shortid from 'shortid';

/**
 * @export
 * @interface ITopicModel
 * @extends {Document}
 */
export interface ITopicModel extends Document {
    name: string;
    area: string;
    description: string;
    length: Number;
}

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
const TopicSchema: Schema = new Schema({
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
        type:String, 
        ref:'AreaModel', 
    },
    description: String,
    length: Number,
}, {
    collection: 'topcimodel',
    versionKey: false
});

export default connections.db.model < ITopicModel > ('TopicModel', TopicSchema);
