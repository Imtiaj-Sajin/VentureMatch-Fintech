import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company_req') 
export class company_req {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true }) 
  company_name: string;


  @Column({ length: 50 })
  company_type: string;

  @Column({ length: 50, nullable: true })
  growth: string;

  @Column({ length: 20 })
  launch_date: string;

  @Column({ length: 50 })
  funding: string;

  @Column({ length: 50 })
  status: string;

  @Column({ type: 'boolean', default: false })
  business_plan: boolean;

  @Column({ type: 'boolean', default: false })
  liabilities_report: boolean;

  @Column({ type: 'boolean', default: false })
  income_statement: boolean;

  @Column({ type: 'boolean', default: false })
  pitch_deck: boolean;

  @Column({ type: 'boolean', default: false })
  balance_sheet: boolean;

  @Column({ type: 'boolean', default: false })
  valuation_report: boolean;

  @Column({ length: 10, nullable: true })
  admin_decision: string;
}

@Entity('investor_req')
export class InvestorReq {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  investor_name: string;

  @Column({ length: 50 })
  type: string;

  @Column({ length: 100 })
  preferences: string;

  @Column({ length: 50 })
  funds_available: string;

  @Column({ length: 50 })
  history: string;

  @Column({ type: 'boolean', default: false })
  proof_of_funds: boolean;

  @Column({ type: 'boolean', default: false })
  nid_passport: boolean;

  @Column({ type: 'boolean', default: false })
  source_of_funds: boolean;

  @Column({ type: 'boolean', default: false })
  investment_portfolio: boolean;

  @Column({ length: 10, nullable: true })
  admin_decision: string;
}


@Entity('support_box')
export class support_box {
  @PrimaryGeneratedColumn()
  id: number;

}
