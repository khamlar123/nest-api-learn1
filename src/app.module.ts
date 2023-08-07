import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { CompanyModule } from './company/company.module';
import { Company } from './company/entities/company.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CatgoriesModule } from './catgories/catgories.module';
import { Catgory } from './catgories/entities/catgory.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.0.204',
      port: 3306,
      username: 'root',
      password: 'Ngi@Admin/2022',
      database: 'nestjs',
      entities: [User, Company, Product, Catgory],
      synchronize: true,
    }),
    UsersModule,
    CompanyModule,
    ProductModule,
    CatgoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
