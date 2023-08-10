import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/entities/todo.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.204',
      port: 3306,
      username: 'root',
      password: 'Ngi@Admin/2022',
      database: 'nestjs',
      entities: [Todo, Category, User],
      synchronize: true,
    }),
    TodosModule,
    CategoryModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
