import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { AddCompaniesDto } from './validation.dto';
import { AddInvestorDto } from './validation.dto';
import { SajinService } from './sajin.service';

@Controller('sajin')
export class SajinController {
  constructor(private readonly sajinService: SajinService) {}

  @Get()
  getRootMessage() {
    return 'Welcome to hello sajin bhai';
  }

 
  @Get('/investors')
  viewAllInvestors() {
    return this.sajinService.viewAllInvestors();
  }
  @Get('/investors/archived')
  viewAllArchivedInvestors() {
    return this.sajinService.viewAllArchivedInvestors();
  }

  @Get('/investors/pending')
  viewPendingInvestors() {
    return this.sajinService.viewPendingInvestors();
  }

  @Get('/investors/approved')
  viewApprovedInvestors() {
    return this.sajinService.viewApprovedInvestors();
  }

  @Get('/investors/rejected')
  viewRejectedInvestors() {
    return this.sajinService.viewRejectedInvestors();
  }

  @Get('/investors/queued')
  viewQueuedInvestors() {
    return this.sajinService.viewQueuedInvestors();
  }
    @Post('/addInvestor')
    @UsePipes(new ValidationPipe())
    addInvestor(@Body() data: AddInvestorDto) {
    return this.sajinService.addInvestor(data);
    }

    @Post('/investors/searchByName/:name')
    searchInvestorByName(@Param('name') name: string) {
    return this.sajinService.searchInvestorByName(name);
    }

    @Post('/investors/searchById/:id')
    searchInvestorById(@Param('id') id: number) {
    return this.sajinService.searchInvestorById(id);
    }

    @Post('/investors/modify/:id')
    @UsePipes(new ValidationPipe())
    async modifyInvestor(
      @Param('id') id: number,
      @Body() updatedData: AddInvestorDto,
    ) {
      return this.sajinService.modifyInvestor(id, updatedData);
    }


    @Delete('/investors/delete/:id')
    async deleteInvestor(@Param('id') id: number) {
      return this.sajinService.deleteInvestor(id);
    }




  // -----------Companies-----------
  @Get('/companies')
  viewAllCompanies() {
    return this.sajinService.viewAllCompanies();
  }
  
  @Get('/companies/archived')
  viewAllArchivedCompanies() {
    return this.sajinService.viewAllArchivedCompanies();
  }

  @Get('/companies/pending')
  viewPendingCompanies() {
    return this.sajinService.viewPendingCompanies();
  }

  @Get('/companies/approved')
  viewApprovedCompanies() {
    return this.sajinService.viewApprovedCompanies();
  }
  

  @Get('/companies/rejected')
  viewRejectedCompanies() {
    return this.sajinService.viewRejectedCompanies();
  }

  @Get('/companies/queued')
  viewQueuedCompanies() {
    return this.sajinService.viewQueuedCompanies();
  }

  

    @Post('/companies/searchByName/:name')
    searchCompanyByName(@Param('name') name: string) {
      return this.sajinService.searchCompanyByName(name);
    }
    
  
    
    @Post('/companies/searchById/:id')
    searchCompanyById(@Param('id') id: number) {
      return this.sajinService.searchCompanyById(id);
    }
  

    @Post('/addCompanies')
    @UsePipes(new ValidationPipe())
    addCompanies(@Body() data: AddCompaniesDto) {
      return this.sajinService.addCompany(data);
    }

    @Post('/companies/modify/:id')
    @UsePipes(new ValidationPipe())
    async modifyCompany(
      @Param('id') id: number,
      @Body() updatedData: AddCompaniesDto,
    ) {
      return this.sajinService.modifyCompany(id, updatedData);
    }

    @Delete('/companies/delete/:id')
    async deleteCompany(@Param('id') id: number) {
      return this.sajinService.deleteCompany(id);
    }



}
