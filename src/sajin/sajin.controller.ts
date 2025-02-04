import { Body, Controller, Post, Get, Param, UsePipes, ValidationPipe, Delete,UseGuards  } from '@nestjs/common';
import { AddCompaniesDto } from './validation.dto';
import { AddInvestorDto } from './validation.dto';
import { SajinService } from './sajin.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('sajin')
export class SajinController {
  constructor(private readonly sajinService: SajinService) {}

  @Get()
  getRootMessage() {
    return 'Welcome to hello sajin bhai';
  }

 
  @Get('/investors')
  // @UseGuards(JwtAuthGuard)
  viewAllInvestors() {
    return this.sajinService.viewAllInvestors();
  }
  @Get('/investors/archived')
  // @UseGuards(JwtAuthGuard)
  viewAllArchivedInvestors() {
    return this.sajinService.viewAllArchivedInvestors();
  }

  @Get('/investors/pending')
  // @UseGuards(JwtAuthGuard)
  viewPendingInvestors() {
    return this.sajinService.viewPendingInvestors();
  }

  @Get('/investors/approved')
  // @UseGuards(JwtAuthGuard)
  viewApprovedInvestors() {
    return this.sajinService.viewApprovedInvestors();
  }

  @Get('/investors/rejected')
  // @UseGuards(JwtAuthGuard)
  viewRejectedInvestors() {
    return this.sajinService.viewRejectedInvestors();
  }

  @Get('/investors/queued')
  // @UseGuards(JwtAuthGuard)
  viewQueuedInvestors() {
    return this.sajinService.viewQueuedInvestors();
  }
    @Post('/addInvestor')
  // @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
    addInvestor(@Body() data: AddInvestorDto) {
    return this.sajinService.addInvestor(data);
    }

  @Post('/investors/searchByName/:name')
  // @UseGuards(JwtAuthGuard)
  searchInvestorByName(@Param('name') name: string) {
    return this.sajinService.searchInvestorByName(name);
    }

    @Post('/investors/searchById/:id')
  // @UseGuards(JwtAuthGuard)
  searchInvestorById(@Param('id') id: number) {
    return this.sajinService.searchInvestorById(id);
    }

    @Post('/investors/modify/:id')
  // @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
    async modifyInvestor(
      @Param('id') id: number,
      @Body() updatedData: AddInvestorDto,
    ) {
      return this.sajinService.modifyInvestor(id, updatedData);
    }


    @Delete('/investors/delete/:id')
  // @UseGuards(JwtAuthGuard)
  async deleteInvestor(@Param('id') id: number) {
      return this.sajinService.deleteInvestor(id);
    }




  // -----------Companies-----------
  @Get('/companies')
  // @UseGuards(JwtAuthGuard)
  viewAllCompanies() {
    return this.sajinService.viewAllCompanies();
  }
  
  @Get('/companies/archived')
  // @UseGuards(JwtAuthGuard)
  viewAllArchivedCompanies() {
    return this.sajinService.viewAllArchivedCompanies();
  }

  @Get('/companies/pending')
  // @UseGuards(JwtAuthGuard)
  viewPendingCompanies() {
    return this.sajinService.viewPendingCompanies();
  }

  @Get('/companies/approved')
  // @UseGuards(JwtAuthGuard)
  viewApprovedCompanies() {
    return this.sajinService.viewApprovedCompanies();
  }
  

  @Get('/companies/rejected')
  // @UseGuards(JwtAuthGuard)
  viewRejectedCompanies() {
    return this.sajinService.viewRejectedCompanies();
  }

  @Get('/companies/queued')
  // @UseGuards(JwtAuthGuard)
  viewQueuedCompanies() {
    return this.sajinService.viewQueuedCompanies();
  }

  

    @Post('/companies/searchByName/:name')
  // @UseGuards(JwtAuthGuard)
  searchCompanyByName(@Param('name') name: string) {
      return this.sajinService.searchCompanyByName(name);
    }
    
  
    
    @Post('/companies/searchById/:id')
  // @UseGuards(JwtAuthGuard)
  searchCompanyById(@Param('id') id: number) {
      return this.sajinService.searchCompanyById(id);
    }
  

    @Post('/addCompanies')
  // @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
    addCompanies(@Body() data: AddCompaniesDto) {
      return this.sajinService.addCompany(data);
    }

    @Post('/companies/modify/:id')
  // @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
    async modifyCompany(
      @Param('id') id: number,
      @Body() updatedData: AddCompaniesDto,
    ) {
      return this.sajinService.modifyCompany(id, updatedData);
    }

    @Delete('/companies/delete/:id')
  // @UseGuards(JwtAuthGuard)
    async deleteCompany(@Param('id') id: number) {
      return this.sajinService.deleteCompany(id);
    }



}
