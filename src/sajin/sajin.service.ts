import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull, Not, Like } from 'typeorm';
import { InvestorReq, company_req } from './sajin.entity';

@Injectable()
export class SajinService {
  private investors = []; 
  constructor(
    @InjectRepository(InvestorReq)
    private investors_repository: Repository<InvestorReq>,

    @InjectRepository(company_req)
    private companies_repository: Repository<company_req>,
  ) {}



  async addInvestor(data) {
    return this.investors_repository.save(data);
  }

  async searchInvestorByName(name: string) {
    return this.investors_repository.find({
      where: { investor_name: Like(`%${name}%`) }, 
    });
  }

  async searchInvestorById(id: number) {
    return this.investors_repository.findOneBy({ id });
  }
  

  async viewAllInvestors() {
    return this.investors_repository.find();
  }

  viewPendingInvestors() {
    return this.investors.filter(investor => investor.admin_decision === 'Pending');
  }

  viewApprovedInvestors() {
    return this.investors.filter(investor => investor.admin_decision === 'Approved');
  }

  viewRejectedInvestors() {
    return this.investors.filter(investor => investor.admin_decision === 'Rejected');
  }

  viewQueuedInvestors() {
    return this.investors.filter(investor => investor.admin_decision === 'Queued');
  }




// company------
  async viewAllCompanies() {
    return this.companies_repository.find();
  }

  async viewPendingCompanies() {
    return this.companies_repository.find({ where: { admin_decision: IsNull() } });
  }

  async viewApprovedCompanies() {
    return this.companies_repository.find({ where: { admin_decision: 'approved' } });
  }

  async viewRejectedCompanies() {
    return this.companies_repository.find({ where: { admin_decision: 'REJECTED' } });
  }
  async addCompany(data) {
    return this.companies_repository.save(data);
  }


  async searchCompanyByName(name: string) {
    return this.companies_repository.find({
      where: { company_name: Like(`%${name}%`) }, 
    });
  }
  
  async searchCompanyById(id: number) {
    return this.companies_repository.findOneBy({ id });
  }

  async viewQueuedCompanies() {
    return this.companies_repository.find({
      where: [
        { admin_decision: IsNull() },
        
      ],
    });
  }
}
