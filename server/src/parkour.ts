import { DataSource } from 'typeorm';
import { Blogs } from './ingredients/entities/Blogs';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  database: 'peepotasty',
  entities: [Blogs],
  synchronize: true,
  logging: false,
});
