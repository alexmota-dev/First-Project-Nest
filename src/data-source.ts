import { DataSource } from 'typeorm';
import { Course } from './courses/entities/course.entity';
import { Tag } from './courses/entities/tag.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [Course, Tag],
  subscribers: [],
  migrations: ['dist/migrations/*.js'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
