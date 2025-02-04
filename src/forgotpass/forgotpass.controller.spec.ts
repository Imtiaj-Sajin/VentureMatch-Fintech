import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { forgotpassService } from './forgotpass.service';

@Controller('forgotpass')
export class forgotpassController {
  constructor(private readonly forgotpassService: forgotpassService) {}

  @Post('send')
  async sendMail(@Body() body: { email: string }) {
    const { email } = body;

    if (!email) {
      throw new BadRequestException('Email is required');
    }

    return this.forgotpassService.sendMail(email);
  }
}
