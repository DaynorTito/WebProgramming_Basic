import dotenv from 'dotenv';
dotenv.config();

export const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'tu_usuario',
    password: process.env.DB_PASSWORD || 'tu_contraseña',
    database: process.env.DB_NAME || 'mi_architectura_limpia',
};