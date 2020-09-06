const { Schema, model } = require('mongoose');

const UserSchema = Schema(
	{
		name: { type: String, trim: true, required: true },
		lastname: { type: String, trim: true, required: true },
		email: { unique: true, type: String, trim: true, required: true },
		password: { type: String, trim: true, required: true },
	},
	{
		timestamps: {
			createdAt: true,
			updated: true,
		},
	}
);

module.exports = model('users', UserSchema);
