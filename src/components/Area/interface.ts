import { IAreaModel } from './model';

/**
 * @export
 * @interface IAreaService
 */
export interface IAreaService {

    /**
     * @returns {Promise<IAreaModel[]>}
     * @memberof IAreaService
     */
    findAll(): Promise<IAreaModel[]>;

    /**
     * @param {string} id
     * @returns {Promise<IAreaModel>}
     * @memberof IAreaService
     */
    findOne(id: string): Promise<IAreaModel>;

    /**
     * @param {IAreaModel} IAreaModel
     * @returns {Promise<IAreaModel>}
     * @memberof IAreaService
     */
    insert(IAreaModel: IAreaModel): Promise<IAreaModel>;

    /**
     * @param {string} id
     * @returns {Promise<IAreaModel>}
     * @memberof IAreaService
     */
    remove(id: string): Promise<IAreaModel>;
}
