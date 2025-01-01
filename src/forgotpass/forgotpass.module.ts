import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forgotpassService } from './forgotpass.service';
import { forgotpassController } from './forgotpass.controller';
import { TempforgotpassDataService } from './provider-data.service';

@Module({
  imports: [],
  controllers: [forgotpassController],
  providers: [forgotpassService, TempforgotpassDataService],
})
export class forgotpassModule {}
