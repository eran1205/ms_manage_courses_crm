import * as Joi from 'joi';
import TopicModel, { ITopicModel } from './model';
import TopicValidation from './validation';
import { ITopicService } from './interface';
import formattedLogger from '../../utils/logger';

/**
 * @export
 * @implements {ITopicModelService}
 */
const TopicService: ITopicService = {
    /**
     * @returns {Promise < ITopicModel[] >}
     * @memberof TopicService
     */
    async findAll(): Promise < ITopicModel[] > {
        try {
            formattedLogger.info(`Enter TopicService::findAll()`);

            return await TopicModel.find({}).populate('area', 'name');

        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    async findOne(id: string): Promise < ITopicModel > {
        try {
            formattedLogger.info(`Enter TopicService::findOne() with id: ${id}`);

            const validate: Joi.ValidationResult < {
                id: string
            } > = TopicValidation.getTopic({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            formattedLogger.info(`Pass TopicService::findOne() validation`);

            return await TopicModel.findOne({ _id: id }).populate('area', 'name');
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ITopicModel} topic
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    async insert(body: ITopicModel): Promise < ITopicModel > {
        try {
            formattedLogger.info(`Enter TopicService::insert() with body: ${JSON.stringify(body)}`);

            const validate: Joi.ValidationResult < ITopicModel > = TopicValidation.createTopic(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            formattedLogger.info(`Pass TopicService::insert() validation`);

            const topic: ITopicModel = await TopicModel.create(body);

            return topic;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ITopicModel >}
     * @memberof TopicService
     */
    async remove(id: string): Promise < ITopicModel > {
        try {
            formattedLogger.info(`Enter TopicService::remove() with id: ${id}`);

            const validate: Joi.ValidationResult < {
                id: string
            } > = TopicValidation.removeTopic({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            formattedLogger.info(`Pass TopicService::remove() validation`);

            const topic: ITopicModel = await TopicModel.findOneAndDelete({ _id: id });

            return topic;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default TopicService;
