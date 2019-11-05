import { createLogger, format, transports } from 'winston';
import * as fs from 'fs';
const LOG_DIR: string = 'logs';

if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
}
const formattedLogger = createLogger({
    format: format.combine(
        format.splat(),
        format.json(),
        format.label({ label: 'backend' }),
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss',
        }),
        format.printf((info) => `[${info.label}] [${info.level.toUpperCase()}] (${info.timestamp}): ${info.message}`),
    ),
    level: process.env.NODE_ENV === 'test' ? 'debug' : 'info',
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log', dirname: LOG_DIR, level: 'debug' }),
        new transports.File({ filename: 'errors.log', dirname: LOG_DIR, level: 'error' }),
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log', dirname: LOG_DIR }),
    ],
});

export default formattedLogger;
