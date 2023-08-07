import { Module } from '@nestjs/common';
import { CatgoriesService } from './catgories.service';
import { CatgoriesController } from './catgories.controller';
import { Catgory } from './entities/catgory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Catgory])],
  controllers: [CatgoriesController],
  providers: [CatgoriesService],
})
export class CatgoriesModule {}
