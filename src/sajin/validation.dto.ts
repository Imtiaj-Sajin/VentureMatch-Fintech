
import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class AddInvestorDto {
  @IsNotEmpty()
  @IsString()
  investor_name: string;

  @IsNotEmpty()
  @IsString()
  type: string;


  @IsOptional()
  @IsString()
  admin_decision: string;
}

export class AddCompaniesDto {
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsNotEmpty()
  @IsString()
  company_type: string;

  @IsOptional()
  @IsString()
  growth: string;

  @IsOptional()
  @IsString()
  laaunch_date: string;

  @IsOptional()
  @IsString()
  funding: string;


  @IsOptional()
  @IsString()
  admin_decision: string;
}
