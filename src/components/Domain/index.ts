import DomainService from './service';
import { HttpError } from '../../config/error';
import { NextFunction, Request, Response } from 'express';
import { IDomainModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const domains: IDomainModel[] = await DomainService.findAll();

        res.status(200).json(domains);
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
        const domain: IDomainModel = await DomainService.findOne(req.params.id);

        res.status(200).json(domain);
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
        const domain: IDomainModel = await DomainService.insert(req.body);

        res.status(201).json(domain);
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
        const domain: IDomainModel = await DomainService.remove(req.params.id);

        res.status(200).json(domain);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
