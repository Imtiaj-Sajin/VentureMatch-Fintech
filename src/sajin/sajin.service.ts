import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull, Not, Like } from 'typeorm';
import { ArchivedCompanies, ArchivedInvestors, InvestorReq, company_req } from './sajin.entity';
import { AddCompaniesDto, AddInvestorDto } from './validation.dto';
import { Newsletter } from './sajin.entity';


@Injectable()
export class SajinService {
  private investors = []; 
  constructor(
    @InjectRepository(InvestorReq)
    private investors_repository: Repository<InvestorReq>,

    @InjectRepository(company_req)
    private companies_repository: Repository<company_req>,

    @InjectRepository(ArchivedInvestors)
    private archived_investors_repository: Repository<ArchivedInvestors>,

    @InjectRepository(ArchivedCompanies)
    private archived_companies_repository: Repository<ArchivedCompanies>,

    @InjectRepository(Newsletter)
    private newsletterRepository: Repository<Newsletter>,
  ) {}




  async addInvestor(data) {
    const savedInvestor = await this.investors_repository.save(data);
    return {
      message: savedInvestor.admin_decision === 'Approved' 
        ? 'Request accepted'
        : savedInvestor.admin_decision === 'Rejected' 
          ? 'Request rejected'
          : 'Request pending',
      data: savedInvestor,
    };
  }
  

  async searchInvestorByName(name: string) {
    const investors = await this.investors_repository.find({
      where: { investor_name: Like(`%${name}%`) }, // Use Like or ILike for PostgreSQL
    });
  
    if (investors.length === 0) {
      return {
        message: `No investors found with the name containing '${name}'`,
        data: [],
      };
    }
  
    return {
      message: `Investors found with the name containing '${name}'`,
      data: investors,
    };
  }
  

  async searchInvestorById(id: number) {
    const investor= await this.investors_repository.findOneBy({ id });
    if(!investor){
      return {
        message: `No investor found with the id ${id}`,
        }
    }
    return {
      message: `Investor found with the id ${id}`,
      data: investor,
      };

  }
  

  async viewAllInvestors() {
    return this.investors_repository.find();
  }

  async viewPendingInvestors() {
    return this.investors_repository.find({
      where: { admin_decision: IsNull() },
    });
  }
  
  async viewApprovedInvestors() {
    return this.investors_repository.find({
      where: { admin_decision: 'Approved' },
    });
  }
  
  async viewRejectedInvestors() {
    return this.investors_repository.find({
      where: { admin_decision: 'Rejected' },
    });
  }
  
  async viewQueuedInvestors() {
    return this.investors_repository.find({
      where: [
        { admin_decision: IsNull() },
      { admin_decision: 'Queued' },
      ],
    });
  }

  async modifyInvestor(id: number, updatedData: AddInvestorDto) {
    const investor = await this.investors_repository.findOneBy({ id });
  
    if (!investor) {
      return {
        message: `Investor with ID ${id} not found.`,
      };
    }
  
    await this.investors_repository.update(id, updatedData);
  
    const updatedInvestor = await this.investors_repository.findOneBy({ id });
    return {
      message: `Investor with ID ${id} successfully updated.`,
      data: updatedInvestor,
    };
  }
  

  async deleteInvestor(id: number) {
    const investor = await this.investors_repository.findOneBy({ id });
  
    if (!investor) {
      return { message: `Investor with ID ${id} not found.` };
    }
  
    await this.archived_investors_repository.save(investor);
    await this.investors_repository.delete(id);
  
    return { message: `Investor '${investor.investor_name}' removed.` };
  }
  


// company------
  async viewAllCompanies() {
    return this.companies_repository.find();
  }

  async viewPendingCompanies() {
    return this.companies_repository.find({ where: { admin_decision: IsNull() } });
  }

  async viewApprovedCompanies() {
    return this.companies_repository.find({
      where: { admin_decision: 'Approved' },
    });
  }
  
  async viewRejectedCompanies() {
    return this.companies_repository.find({
      where: { admin_decision: 'Rejected' },
    });
  }
  

  async addCompany(data) {
    const savedCompany=await this.companies_repository.save(data);
    return {
      message:savedCompany.admin_decision==='Approved'
      ? 'Company Approved'
      : savedCompany.admin_decision==='Rejected'
      ? 'Company Rejected'
      : 'Company Queued',
      data:savedCompany,
    };
  }


    async searchCompanyByName(name: string) {
      const companies = await this.companies_repository.find({
        where: { company_name: Like(`%${name}%`) }, 
      });
    
      if (companies.length === 0) {
        return {
          message: `No companies found with the name containing '${name}'`,
          data: [],
        };
      }
    
      return {
        message: `Companies found with the name containing '${name}'`,
        data: companies,
      };
    }
    
  
  async searchCompanyById(id: number) {
    const company= await this.companies_repository.findOneBy({ id });
    if (!company) {
      return {
        message: `Company with id ${id} not found`,
        data: [],
    };
  }
    return {
      data:company,
    };
  }

  async viewQueuedCompanies() {
    return this.companies_repository.find({
      where: [
        { admin_decision: IsNull() },
        
      ],
    });
  }


  async modifyCompany(id: number, updatedData: AddCompaniesDto) {
    const company = await this.companies_repository.findOneBy({ id });
  
    if (!company) {
      return {
        message: `Company with ID ${id} not found.`,
      };
    }
  
    await this.companies_repository.update(id, updatedData);
  
    const updatedCompany = await this.companies_repository.findOneBy({ id });
    return {
      message: `Company with ID ${id} successfully updated.`,
      data: updatedCompany,
    };
  }

  async deleteCompany(id: number) {
    const company = await this.companies_repository.findOneBy({ id });
  
    if (!company) {
      return { message: `Company with ID ${id} not found.` };
    }
  
    await this.archived_companies_repository.save(company);
  
    await this.companies_repository.delete(id);
  
    return { message: `Company '${company.company_name}' removed.` };
  }
  
  //archived
  async viewAllArchivedCompanies() {
    return this.archived_companies_repository.find();
  }

  async viewAllArchivedInvestors(){
    return this.archived_investors_repository.find();
  }


  
  
  // ------newsletter---asdfasdfk---

  createNewsletter(newsletterData: Partial<Newsletter>) {
    const newsletter = this.newsletterRepository.create(newsletterData);
    return this.newsletterRepository.save(newsletter);
  }

  findAllNews() {
    return this.newsletterRepository.find();
  }

  findOneNews(id: number) {
    return this.newsletterRepository.findOne(
      { where:
         { id } 
          });
  }

  deleteNewsletter(id: number) {
    return this.newsletterRepository.delete(id);
  }

}





