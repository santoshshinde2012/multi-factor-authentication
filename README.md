# [Multi-Factor-Authentication](https://github.com/santoshshinde2012/multi-factor-authentication)

2FA TOTP implementation using Node.js, TypeScript, and React.js

# Technology Stack

- Node JS
- Typescript
- React JS
- Vite

## Backend

The backend includes the APIs for generating QR code and verifying TOTP code.

## Client

The client includes a UI for showing QR codes and an input form to take a TOTP code.

# Start The application in Development Mode

```
## Clone the Application 
git clone https://github.com/santoshshinde2012/multi-factor-authentication.git

## Install the dependencies
cd multi-factor-authentication && npm install

## Start the application
npm run dev
```

## Initial Folder Structure

```
├── multi-factor-authentication
│   ├── backend
│   │  ├── ....
│   │  ├── package-lock.json
│   │  └── package.json
│   ├── client
│   │  ├── ....
│   │  ├── package-lock.json
│   │  └── package.json
│   ├── wiki
│   │   ├── ....
│   │   └── 
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
```
## Main API

- `api/v1/mfa/ready` : Check setup is ready or not
- `api/v1/mfa/generate` : Generate the OTP Secret
- `api/v1/mfa/verify` : Verify the OTP Secret
- `api/v1/mfa/validate` : Validate the OTP code
- `api/v1/mfa/reset` : Reset using the backup code

<hr/>

### Connect with me on
<div id="badges">
  <a href="https://twitter.com/shindesan2012">
    <img src="https://img.shields.io/badge/shindesan2012-black?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
  <a href="https://www.linkedin.com/in/shindesantosh/">
    <img src="https://img.shields.io/badge/shindesantosh-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
   <a href="https://blog.santoshshinde.com/">
    <img src="https://img.shields.io/badge/Blog-black?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge"/>
  </a>
  <a href="https://www.buymeacoffee.com/santoshshin" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" height="28" width="100">
    </a>
</div>

````
/**
 * Multi Factor Auth controller
 */
export default class MultiFactorAuthController extends BaseController {
	// base path
	public basePath: string = 'mfa';
	private mfa: MultiFactorAuthService;

	constructor() {
		super();
		this.mfa = new MultiFactorAuthService();
	}

	/**
	 *
	 */
	public register(): Router {
		this.router.post('/ready', this.ready.bind(this));
		this.router.post('/generate', this.generate.bind(this));
		this.router.post('/verify', this.verify.bind(this));
		this.router.post('/validate', this.validate.bind(this));
		this.router.post('/reset', this.reset.bind(this));
		return this.router;
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async ready(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {

			const { id } = req.body;
			if (!id) {
				throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
			}
			const response: IUserSatatus = await this.mfa.getMfaRecordById(id)
			res.locals.data = response;
			// call base class method	
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async generate(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {

			const { id } = req.body;
			if (!id) {
				throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
			}
			const response: IQRGnerateResponse = await this.mfa.generateQRcode(id)
			res.locals.data = response;
			// call base class method	
			super.send(res);
		} catch (err) {
			next(err);
		}
	}


	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async verify(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { secret, otp, id } = req.body;
			const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

			if (!otp || !secret || !id) {
				throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
			}

			if (!ENCRYPTION_KEY) {
				throw new ApiError(ReasonPhrases.INTERNAL_SERVER_ERROR, StatusCodes.INTERNAL_SERVER_ERROR);
			}

			const isVerified: boolean = this.mfa.verifyTOTP(secret, otp);

			if (isVerified) {
				const code: string = await this.mfa.generateBackupCode();
				const record: IUserInfo = {
					code,
					secret,
					id
				}
				const isActive: boolean = await this.mfa.saveMfaRecord(record, ENCRYPTION_KEY)
				res.locals.data = {
					code,
					isActive
				};
				super.send(res);
			}

			throw new ApiError("Invalid OTP", StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
		} catch (err) {
			next(err);
		}
	}


	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async validate(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { otp, id } = req.body;
			const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

			if (!otp || !id) {
				throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
			}
			if (!ENCRYPTION_KEY) {
				throw new ApiError(ReasonPhrases.INTERNAL_SERVER_ERROR, StatusCodes.INTERNAL_SERVER_ERROR);
			}

			const secret: string = await this.mfa.getOtpSecretById(id, ENCRYPTION_KEY)

			const verified: boolean = this.mfa.verifyTOTP(secret, otp);
			res.locals.data = {
				verified
			};
			super.send(res);
		} catch (err) {
			next(err);
		}
	}


	/**
	 *
	 * @param req
	 * @param res
	 * @param next
	 */
	public async reset(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { code, id } = req.body;
			if (!code || !id) {
				throw new ApiError(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);
			}

			const isReset = await this.mfa.reset(id, code);

			res.locals.data = {
				isReset
			};

			// call base class method
			super.send(res);
		} catch (err) {
			next(err);
		}
	}

}
````