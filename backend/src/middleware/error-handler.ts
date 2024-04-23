import * as util from 'util';
import * as express from 'express';
import { StatusCodes } from 'http-status-codes';
import ApiError, { IError } from '../abstractions/ApiError';
import Crypto from '../lib/crypto';
import logger from '../lib/logger';

const addErrorHandler = (
	err: ApiError,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
): void => {
	if (err) {
		const status: number = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
		logger.error(`REQUEST HANDLING ERROR:
        \nERROR:\n${JSON.stringify(err)}
        \nREQUEST HEADERS:\n${util.inspect(req.headers)}
        \nREQUEST PARAMS:\n${util.inspect(req.params)}
        \nREQUEST QUERY:\n${util.inspect(req.query)}
        \nBODY:\n${util.inspect(req.body)}`);
		let body: IError | string = {
			fields: err.fields,
			message: err.message || 'An error occurred during the request.',
			name: err.name,
			status,
		};

		if (process.env.APPLY_ENCRYPTION && process.env.SECRET_KEY) {
			body = Crypto.encrypt(JSON.stringify(body), process.env.SECRET_KEY);
		}
		res.status(status);
		res.send(body);
	}
	next();
};

export default addErrorHandler;
