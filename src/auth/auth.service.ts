import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
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
    return payload.username === this.validCredentials.username
      ? payload
      : null;
  }
}
