import { IDomainModel } from './model';

/**
 * @export
 * @interface IDomainService
 */
export interface IDomainService {

    /**
     * @returns {Promise<IDomainModel[]>}
     * @memberof IDomainService
     */
    findAll(): Promise<IDomainModel[]>;

    /**
     * @param {string} id
     * @returns {Promise<IDomainModel>}
     * @memberof IDomainService
     */
    findOne(id: string): Promise<IDomainModel>;

    /**
     * @param {IDomainModel} IDomainModel
     * @returns {Promise<IDomainModel>}
     * @memberof IDomainService
     */
    insert(IDomainModel: IDomainModel): Promise<IDomainModel>;

    /**
     * @param {string} name
     * @returns {Promise<IDomainModel>}
     * @memberof IDomainService
     */
    remove(name: string): Promise<IDomainModel>;
}
