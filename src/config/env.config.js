import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3500;
export const DATABASE_URI = process.env.DATABASE_URI;
