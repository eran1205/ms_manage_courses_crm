import { ITopicModel } from './model';

/**
 * @export
 * @interface ITopicService
 */
export interface ITopicService {

    /**
     * @returns {Promise<ITopicModel[]>}
     * @memberof ITopicService
     */
    findAll(): Promise<ITopicModel[]>;

    /**
     * @param {string} name
     * @returns {Promise<ITopicModel>}
     * @memberof ITopicService
     */
    findOne(name: string): Promise<ITopicModel>;

    /**
     * @param {ITopicModel} ITopicModel
     * @returns {Promise<ITopicModel>}
     * @memberof ITopicService
     */
    insert(ITopicModel: ITopicModel): Promise<ITopicModel>;

    /**
     * @param {string} name
     * @returns {Promise<ITopicModel>}
     * @memberof ITopicService
     */
    remove(name: string): Promise<ITopicModel>;
}
