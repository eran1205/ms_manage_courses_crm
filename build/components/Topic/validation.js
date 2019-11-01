"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class TopicValidation
 * @extends Validation
 */
class TopicValidation extends validation_1.default {
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
    createTopic(params) {
        const schema = Joi.object().keys({
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
    getTopic(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof TopicValidation
     */
    removeTopic(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
}
exports.default = new TopicValidation();
//# sourceMappingURL=validation.js.map