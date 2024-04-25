import { Router } from 'express';
import MultiFactorAuthController from './components/multi-factor-authentication/MultiFactorAuthController';
import SystemStatusController from './components/system-status/SystemStatusController';

/**
 * Here, you can register routes by instantiating the controller.
 *
 */
export default function registerRoutes(): Router {
	const router = Router();

	// Define an array of controller objects
	const controllers = [
		new SystemStatusController(),
		new MultiFactorAuthController(),
	];

	// Dynamically register routes for each controller
	controllers.forEach((controller) => {
		// make sure each controller has basePath attribute and register() method
		router.use(`/v1/${controller.basePath}`, controller.register());
	});

	return router;
}
