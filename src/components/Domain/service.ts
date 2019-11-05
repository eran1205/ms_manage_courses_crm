import * as Joi from 'joi';
import DomainModel, { IDomainModel } from './model';
import { Types } from 'mongoose';
import { IDomainService } from './interface';
import DomainValidation from './validation';
import formattedLogger from '../../utils/logger';

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
            formattedLogger.info(`Enter DomainService::findAll()`);
            
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
            formattedLogger.info(`Enter DomainService::findOne() with id: ${id}`);

            const validate: Joi.ValidationResult < {
                id: string
            } > = DomainValidation.getDomain({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            formattedLogger.info(`Pass DomainService::findOne() validation`);

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
            formattedLogger.info(`Enter DomainService::insert() with body: ${JSON.stringify(body)}`);

            const validate: Joi.ValidationResult < IDomainModel > = DomainValidation.createDomain(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            formattedLogger.info(`Pass DomainService::insert() validation`);

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
            formattedLogger.info(`Enter DomainService::remove() with id: ${id}`);

            const validate: Joi.ValidationResult < { id: string } > = 
                DomainValidation.removeDomain({ id });

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            formattedLogger.info(`Pass DomainService::remove() validation`);

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
