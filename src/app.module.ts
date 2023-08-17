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
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // autoLoadEntities: true,
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
