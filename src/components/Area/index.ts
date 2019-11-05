import AreaService from './service';
import { HttpError } from '../../config/error';
import { IAreaModel } from './model';
import { NextFunction, Request, Response } from 'express';
import formattedLogger from '../../utils/logger';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        formattedLogger.info(`Enter AreaComponent::findall()`);
        const areas: IAreaModel[] = await AreaService.findAll();
        
        formattedLogger.info(`AreaComponent::findall(), got ${areas.length} areas`);

        res.status(200).json(areas);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        formattedLogger.info(`Enter AreaComponent::findOne() with id: ${req.params.id}`);

        const area: IAreaModel = await AreaService.findOne(req.params.id);
        
        res.status(200).json(area);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        formattedLogger.info(`Enter AreaComponent::create() with body: ${req.body}`);

        const area: IAreaModel = await AreaService.insert(req.body);

        res.status(201).json(area);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        formattedLogger.info(`Enter AreaComponent::remove() with id: ${req.params.id}`);

        const area: IAreaModel = await AreaService.remove(req.params.id);

        res.status(200).json(area);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
