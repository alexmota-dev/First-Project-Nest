import { DataSource } from 'typeorm';
import { Course } from './courses/entities/course.entity';
import { Tag } from './courses/entities/tag.entity';
import { CourseRefactoring1681122189774 } from './migrations/1681122189774-CourseRefactoring';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'firstapinest',
  synchronize: true,
  logging: true,
  entities: [Course, Tag],
  subscribers: [],
  migrations: [CourseRefactoring1681122189774],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
