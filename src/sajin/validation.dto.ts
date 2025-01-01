
import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class AddInvestorDto {
  @IsOptional()
  @IsString()
  investor_name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  preferences?: string;

  @IsOptional()
  @IsString()
  funds_available?: string;

  @IsOptional()
  @IsString()
  history?: string;

  @IsOptional()
  @IsBoolean()
  proof_of_funds?: boolean;

  @IsOptional()
  @IsBoolean()
  nid_passport?: boolean;

  @IsOptional()
  @IsBoolean()
  source_of_funds?: boolean;

  @IsOptional()
  @IsBoolean()
  investment_portfolio?: boolean;

  @IsOptional()
  @IsString()
  admin_decision?: string;
}

export class AddCompaniesDto {
  @IsOptional()
  @IsString()
  company_name?: string;

  @IsOptional()
  @IsString()
  company_type?: string;

  @IsOptional()
  @IsString()
  growth?: string;

  @IsOptional()
  @IsString()
  launch_date?: string;

  @IsOptional()
  @IsString()
  funding?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsBoolean()
  business_plan?: boolean;

  @IsOptional()
  @IsBoolean()
  liabilities_report?: boolean;

  @IsOptional()
  @IsBoolean()
  income_statement?: boolean;

  @IsOptional()
  @IsBoolean()
  pitch_deck?: boolean;

  @IsOptional()
  @IsBoolean()
  balance_sheet?: boolean;

  @IsOptional()
  @IsBoolean()
  valuation_report?: boolean;

  @IsOptional()
  @IsString()
  admin_decision?: string;
}


