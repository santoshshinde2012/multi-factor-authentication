export interface IQRGnerateResponse {
	secret: string;
	qrcode: string;
}

export interface IUserSatatus {
	id: string;
	isActive: boolean;
}

export interface IUserInfo {
	id: string;
	secret: string;
	code: string;
}