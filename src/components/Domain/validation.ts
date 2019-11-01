import * as Joi from 'joi';
import Validation from '../validation';
import { IDomainService } from './interface';
import { IDomainModel } from './model';

/**
 * @export
 * @class DomainValidation
 * @extends Validation
 */
class DomainValidation extends Validation {

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
    createDomain(
        params: IDomainModel
    ): Joi.ValidationResult < IDomainModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof DomainValidation
     */
    getDomain(
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
     * @param {{ name: string }} body
     * @returns {Joi.ValidationResult<{ name: string }>}
     * @memberof DomainValidation
     */
    removeDomain(
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

export default new DomainValidation();
