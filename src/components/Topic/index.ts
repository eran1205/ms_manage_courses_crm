import TopicService from './service';
import { HttpError } from '../../config/error';
import { ITopicModel } from './model';
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
        formattedLogger.info(`Enter TopicComponent::findall()`);
        const topics: ITopicModel[] = await TopicService.findAll();

        formattedLogger.info(`TopicComponent::findall(), got ${topics.length} topics`);
        res.status(200).json(topics);
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
        formattedLogger.info(`Enter TopicComponent::findOne() with id: ${req.params.id}`);

        const topic: ITopicModel = await TopicService.findOne(req.params.id);

        res.status(200).json(topic);
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
        formattedLogger.info(`Enter TopicComponent::create() with body: ${req.body}`);

        const topic: ITopicModel = await TopicService.insert(req.body);

        res.status(201).json(topic);
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
        formattedLogger.info(`Enter TopicComponent::remove() with id: ${req.params.id}`);

        const topic: ITopicModel = await TopicService.remove(req.params.id);

        res.status(200).json(topic);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
