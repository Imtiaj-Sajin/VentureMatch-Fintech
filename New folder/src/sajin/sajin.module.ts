import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SajinController } from './sajin.controller';
import { SajinService } from './sajin.service';
import { DataSource } from 'typeorm';
import { ArchivedCompanies, ArchivedInvestors, InvestorReq } from './sajin.entity'
import { company_req } from './sajin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvestorReq,company_req,ArchivedInvestors,ArchivedCompanies]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'sajin_wt',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    })
  ],
  controllers: [SajinController],
  providers: [SajinService],
})
export class AModule {}
