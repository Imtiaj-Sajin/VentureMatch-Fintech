import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly validEmail = 'imtiajsajin@gmail.com'; 
  private readonly validCredentials = { username: 'admin', password: 'admin' };

  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string) {
    if (
      username === this.validCredentials.username &&
      password === this.validCredentials.password
    ) {
      const payload = { username };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async validateUser(payload: any) {
    return payload.email === this.validEmail ? payload : null;
  }

  async generateToken(email: string) {
    const payload = { email };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
  
}
