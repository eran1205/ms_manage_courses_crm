import * as Joi from 'joi';
import Validation from '../validation';
import { IAreaModel } from './model';

/**
 * @export
 * @class AreaValidation
 * @extends Validation
 */
class AreaValidation extends Validation {

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
    createArea(
        params: IAreaModel
    ): Joi.ValidationResult < IAreaModel > {
        const schema: Joi.Schema = Joi.object().keys({
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
    getArea(
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
     * @returns {Joi.ValidationResult<{ name: string }>}
     * @memberof AreaValidation
     */
    removeArea(
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

export default new AreaValidation();
