import * as Joi from 'joi';
import DomainModel, { IDomainModel } from './model';
import { Types } from 'mongoose';
import { IDomainService } from './interface';
import DomainValidation from './validation';

/**
 * @export;
 * @implements {IDomainModelService}
 */
const DomainService: IDomainService = {
    /**
     * @returns {Promise < IDomainModel[] >}
     * @memberof DomainService
     */
    async findAll(): Promise < IDomainModel[] > {
        try {
            return await DomainModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} name
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    async findOne(id: string): Promise < IDomainModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = DomainValidation.getDomain({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await DomainModel.findOne({
                _id: id
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IDomainModel} domain
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    async insert(body: IDomainModel): Promise < IDomainModel > {
        try {
            const validate: Joi.ValidationResult < IDomainModel > = DomainValidation.createDomain(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const domain: IDomainModel = await DomainModel.create(body);

            return domain;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IDomainModel >}
     * @memberof DomainService
     */
    async remove(id: string): Promise < IDomainModel > {
        try {
            const validate: Joi.ValidationResult < { id: string } > = 
                DomainValidation.removeDomain({ id });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const domain: IDomainModel = await DomainModel.findOneAndRemove({
                _id: id
            });

            return domain;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default DomainService;
