import * as Joi from 'joi';
import Validation from '../validation';
import { ITopicModel } from './model';

/**
 * @export
 * @class TopicValidation
 * @extends Validation
 */
class TopicValidation extends Validation {

    /**
     * Creates an instance of TopicValidation.
     * @memberof TopicValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ITopicModel} params
     * @returns {Joi.ValidationResult<ITopicModel >}
     * @memberof TopicValidation
     */
    createTopic(
        params: ITopicModel
    ): Joi.ValidationResult < ITopicModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            area: Joi.string().required(),
            length: Joi.number().required(),
            description: Joi.string()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof TopicValidation
     */
    getTopic(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof TopicValidation
     */
    removeTopic(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.required()
        });

        return Joi.validate(body, schema);
    }
}

export default new TopicValidation();
