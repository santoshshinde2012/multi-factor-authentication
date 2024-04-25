import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../index';

interface UserAttributes {
	id: string;
	isActive: boolean;
	encryptedSecret: string;
	hashBackupCode: string;
}

interface UserCreationAttributes
	extends Optional<UserAttributes, 'id'> {}

class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	public id!: string;
	public isActive!: boolean;
	public encryptedSecret!: string;
	public hashBackupCode!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.STRING(100),
			primaryKey: true,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false,
		},
		hashBackupCode: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		encryptedSecret: {
			type: DataTypes.STRING(400),
			allowNull: false,
		}
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'User',
		timestamps: true,
	},
);

export { User, UserAttributes, UserCreationAttributes };
