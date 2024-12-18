import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AController } from './sajin/sajin.controller';
import { SajinService } from './sajin/sajin.service';
import { AModule } from './sajin/sajin.module';
import { InvestorReq,company_req } from './sajin/sajin.entity';

@Module({
  imports: [AModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
