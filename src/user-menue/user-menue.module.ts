import { Module } from '@nestjs/common';
import { UserMenueService } from './user-menue.service';
import { UserMenueController } from './user-menue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMenue } from './entities/user-menue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserMenue])],
  controllers: [UserMenueController],
  providers: [UserMenueService],
})
export class UserMenueModule {}
