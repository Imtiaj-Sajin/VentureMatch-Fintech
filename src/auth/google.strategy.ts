import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import 'dotenv/config'
import * as dotenv from 'dotenv';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.clientID, 
      clientSecret: process.env.clientSecret, 
      callbackURL: process.env.callbackURL,
      scope: ['email', 'profile'],
    });
    
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { emails } = profile;
    const email = emails[0].value;

    if (email !== 'imtiajsajin@gmail.com') {
      done(new UnauthorizedException('Email is not authorized'), null);
    } else {
      const user = {
        googleId: profile.id,
        displayName: profile.displayName,
        email,
      };
      done(null, user);
    }
  }
}
