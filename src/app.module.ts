import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TodosModule } from './todos/todos.module';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';
import { UserMenueModule } from './user-menue/user-menue.module';
import { ProductsModule } from './products/products.module';
import { PacketTypeModule } from './packet-type/packet-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'khamlar123',
      database: 'nestjs',
      // entities: [Todo, Category, User, Menu, UserMenue],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TodosModule,
    CategoryModule,
    UserModule,
    MenuModule,
    UserMenueModule,
    ProductsModule,
    PacketTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
