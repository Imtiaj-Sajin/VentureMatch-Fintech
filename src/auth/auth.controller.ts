import { Controller, Post, Body, Res, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }, @Res() res: Response) {
    const { username, password } = body;
    const { access_token } = await this.authService.login(username, password);
    res.cookie('jwt', access_token, { httpOnly: true, secure: true });
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

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res: Response) {
    const user = req.user;
    console.log(user);
    // alert(user);
    const { access_token } = await this.authService.generateToken(user.email);
    res.cookie('jwt', access_token, { httpOnly: true, secure: true });
    res.redirect('/auth/welcome'); 
  }

  @Get('welcome')
  @UseGuards(JwtAuthGuard)
  async welcome(@Req() req) {
    const user = req.user; 
    return { message: `Welcome, ${user.email}!` };return { message: `Welcome, ${user.email || user.username}!` };
    // console.log("dg")
  }
}
