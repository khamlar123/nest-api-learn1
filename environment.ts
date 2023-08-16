import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const environment : TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'khamlar123',
  database: 'nestjs',
  autoLoadEntities: true,
  synchronize: true,
};
