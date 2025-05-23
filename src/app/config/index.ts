import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
    port: process.env.PORT,
    NODE_DEV: process.env.NODE_DEV,
}
