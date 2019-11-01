import * as Joi from 'joi';
import TopicModel, { ITopicModel } from './model';
import TopicValidation from './validation';
import { ITopicService } from './interface';
import { Types } from 'mongoose';

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
            const validate: Joi.ValidationResult < {
                id: string
            } > = TopicValidation.getTopic({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

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
            const validate: Joi.ValidationResult < ITopicModel > = TopicValidation.createTopic(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

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
            const validate: Joi.ValidationResult < {
                id: string
            } > = TopicValidation.removeTopic({
                id
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const topic: ITopicModel = await TopicModel.findOneAndDelete({ _id: id });

            return topic;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default TopicService;
