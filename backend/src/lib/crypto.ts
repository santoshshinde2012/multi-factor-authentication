import crypto from 'crypto';

export default class Crypto {
    public static algorithm: crypto.CipherGCMTypes = 'aes-256-gcm';

    public static getRandomString(num: number = 8): string {
        return crypto.randomBytes(num).toString('hex');
    }

    public static getHashString(input: string): string {
        const hash = crypto.createHash('sha256');
        hash.update(input);
        return hash.digest('hex');
    }
    public static encrypt(text: string, password: string): string {
        const iv = crypto.randomBytes(16).toString('hex');
        const cipher = crypto.createCipheriv(Crypto.algorithm, password, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const tag = cipher.getAuthTag().toString('hex');
        return `${iv}.${tag}.${encrypted}`;
    }

    public static decrypt(encryptedData: string, password: string): string {
        const [iv, tag, content] = encryptedData.split('.');
        let decipher = crypto.createDecipheriv(Crypto.algorithm, password, iv);
        decipher.setAuthTag(Buffer.from(tag, 'hex'));
        let dec = decipher.update(content, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}