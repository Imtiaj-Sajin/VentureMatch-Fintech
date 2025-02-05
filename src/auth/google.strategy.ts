import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import 'dotenv/config'
import * as dotenv from 'dotenv';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: '558352867109-9m0u4k14inok7anaub2mctsil2mdui9l.apps.googleusercontent.com', 
      clientSecret: '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', 
      callbackURL: 'http://localhost:3000/auth/google/callback',
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

    if (email !== 'rkakashi585@gmail.com') {
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
