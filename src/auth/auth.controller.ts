import { Controller, Post, Body, Res, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }, @Res() res: Response) {
    const { username, password } = body;
    const { access_token } = await this.authService.login(username, password);
    res.cookie('jwt', access_token, { httpOnly: true,secure: true }); 
    res.json({ message: 'Login successful' });
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt'); 
    res.json({ message: 'Logged out successfully' });
  }

  @Get('test-protected')
  @UseGuards(JwtAuthGuard)
  async testProtected() {
    return { message: 'You have access to this route!' };
  }
}
