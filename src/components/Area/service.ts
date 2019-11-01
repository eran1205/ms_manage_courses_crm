import * as Joi from 'joi';
import AreaModel, { IAreaModel } from './model';
import AreaValidation from './validation';
import { IAreaService } from './interface';
import { Types, Schema, Mongoose } from 'mongoose';

/**
 * @export
 * @implements {IAreaModelService}
 */
const AreaService: IAreaService = {
    /**
     * @returns {Promise < IAreaModel[] >}
     * @memberof AreaService
     */
    async findAll(): Promise < IAreaModel[] > {
        try {
            return await AreaModel.find({}).populate('domain');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    async findOne(id: string): Promise < IAreaModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = AreaValidation.getArea({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await AreaModel.findOne({ _id: id }).populate('domain');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IAreaModel} area
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    async insert(body: IAreaModel): Promise < IAreaModel > {
        try {
            const validate: Joi.ValidationResult < IAreaModel > = AreaValidation.createArea(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            
            const area: IAreaModel = await AreaModel.create(body);

            return area;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} name
     * @returns {Promise < IAreaModel >}
     * @memberof AreaService
     */
    async remove(id: string): Promise < IAreaModel > {
        try {
            const validate: Joi.ValidationResult < {
                id: string
            } > = AreaValidation.removeArea({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const area: IAreaModel = await AreaModel.findOneAndDelete({  _id: id }).populate('domain');

            return area;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default AreaService;
