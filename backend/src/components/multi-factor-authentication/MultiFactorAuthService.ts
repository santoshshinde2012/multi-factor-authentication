import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import QRCode from 'qrcode';
import { authenticator } from 'otplib';
import {
    User,
    UserCreationAttributes,
} from '../../database/models/User';
import logger from '../../lib/logger';
import ApiError from '../../abstractions/ApiError';
import { IQRGnerateResponse, IUserInfo, IUserSatatus } from './MultiFactorAuthTypes';
import Crypto from '../../lib/crypto';

export class MultiFactorAuthService {
    constructor(private issuer: string = 'Demo', private numberOfBytes: number = 20) { }

    public async getOtpSecretById(id: string, encryptionKey: string): Promise<string> {
        try {
            const record = await User.findByPk(id);

            if (!record?.isActive) {
                throw new ApiError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
            }

            const secret: string = Crypto.decrypt(record.encryptedSecret, encryptionKey);

            return secret;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    public async getMfaRecordById(userId: string): Promise<IUserSatatus> {
        try {
            const record = await User.findByPk(userId);

            if (!record) {
                throw new ApiError(ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
            }
            const { id, isActive } = record

            return {
                id,
                isActive
            };
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }
    public async saveMfaRecord(record: IUserInfo, encryptionKey: string): Promise<boolean> {
        try {
            const { id, secret, code } = record;
            const encryptedSecret = Crypto.encrypt(secret, encryptionKey);
            const hashBackupCode = Crypto.getHashString(code);

            const payload: UserCreationAttributes = {
                id,
                encryptedSecret,
                hashBackupCode,
                isActive: true
            }
            const { isActive } = await User.create(payload);
            return isActive;
        } catch (error) {
            logger.error(error);
            throw error;
        }

    }

    public async reset(id: string, code: string): Promise<boolean> {
        try {
            const hashBackupCode =  Crypto.getHashString(code);
            const deletedCount = await User.destroy({
                where: { id, hashBackupCode },
            });

            console.log('deletedCount', deletedCount)
            return !!deletedCount;
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    public async generateQRcode(id: string): Promise<IQRGnerateResponse> {
        const secret: string = authenticator.generateSecret(this.numberOfBytes);
        const qrUri: string = authenticator.keyuri(id, this.issuer, secret);
        const qrcode: string = await QRCode.toDataURL(qrUri);
        const data: IQRGnerateResponse = {
            secret,
            qrcode
        }
        return data;
    }

    public verifyTOTP(secret: string, token: string): boolean {
        return authenticator.check(token, secret);
    }

    public async generateBackupCode(): Promise<string> {
        return Crypto.getRandomString()
    }

}