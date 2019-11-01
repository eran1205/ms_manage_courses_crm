"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const validation_1 = require("../validation");
/**
 * @export
 * @class DomainValidation
 * @extends Validation
 */
class DomainValidation extends validation_1.default {
    /**
     * Creates an instance of UserValidation.
     * @memberof DomainValidation
     */
    constructor() {
        super();
    }
    /**
     * @param {IUserModel} params
     * @returns {Joi.ValidationResult<IUserModel >}
     * @memberof DomainValidation
     */
    createDomain(params) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
        });
        return Joi.validate(params, schema);
    }
    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof DomainValidation
     */
    getDomain(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
    /**
     * @param {{ name: string }} body
     * @returns {Joi.ValidationResult<{ name: string }>}
     * @memberof DomainValidation
     */
    removeDomain(body) {
        const schema = Joi.object().keys({
            id: this.customJoi.required()
        });
        return Joi.validate(body, schema);
    }
}
exports.default = new DomainValidation();
//# sourceMappingURL=validation.js.map