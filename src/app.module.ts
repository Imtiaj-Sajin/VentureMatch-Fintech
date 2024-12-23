import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SajinService } from './sajin/sajin.service';
import { AModule } from './sajin/sajin.module';
import { AuthModule } from './auth/auth.module';
import { InvestorReq,company_req } from './sajin/sajin.entity';

@Module({
  imports: [AModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
