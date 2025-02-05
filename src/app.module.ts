import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service';
// import { SajinService } from './sajin/sajin.service';
import { AModule } from './sajin/sajin.module';
import { AuthModule } from './auth/auth.module';
// import { InvestorReq,company_req } from './sajin/sajin.entity';
import { forgotpassModule } from './forgotpass/forgotpass.module';
import { forgotpassService } from './forgotpass/forgotpass.service';
import { TempforgotpassDataService } from './forgotpass/provider-data.service';
import { LeadModule } from './leads/lead.module';
// import { LeadService} from "./leads/lead.service";

@Module({
  imports: [AModule, AuthModule, forgotpassModule, LeadModule],
  controllers: [AppController],
  providers: [AppService, forgotpassService, TempforgotpassDataService],
})
export class AppModule {}
