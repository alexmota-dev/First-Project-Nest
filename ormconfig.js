module.exports = {
  type: 'postgres',
  host: 'localhost',
  database: 'firstapinest',
  port: 5432,
  username: 'postgres',
  password: 'root',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: ['src/migrations'],
  },
  //   migrationsTableName: 'courses_migration_table',
};
