"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class AreaValidation
 * @extends Validation
 */
class AreaValidation extends validation_1.default {
    /**
     * Creates an instance of AreaValidation.
     * @memberof AreaValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IAreaModel} params
     * @returns {Joi.ValidationResult<IAreaModel >}
     * @memberof AreaValidation
     */
    createArea(params) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            domain: Joi.string().required()
        });
        return Joi.validate(params, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ name: string }>}
     * @memberof AreaValidation
     */
    getArea(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ name: string }>}
     * @memberof AreaValidation
     */
    removeArea(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
}
exports.default = new AreaValidation();
//# sourceMappingURL=validation.js.map