import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddCompaniesDto } from './validation.dto';
import { AddInvestorDto } from './validation.dto';
import { SajinService } from './sajin.service';

@Controller('sajin')
export class AController {
  constructor(private readonly sajinService: SajinService) {}

  @Get()
  getRootMessage() {
    return 'Welcome to hello sajin bhai';
  }

 
  @Get('/investors')
  viewAllInvestors() {
    return this.sajinService.viewAllInvestors();
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

  @Get('/companies')
  viewAllCompanies() {
    return this.sajinService.viewAllCompanies();
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
}
