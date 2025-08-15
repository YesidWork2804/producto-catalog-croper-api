import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
          console.log('❌ No hay header de autorización');
          return null;
        }

        const token = authHeader.replace('Bearer ', '');

        return token;
      },
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key-change-in-production',
    });
  }

  async validate(payload: any) {
    const user = {
      userId: payload.sub,
      email: payload.email,
      nombre: 'Usuario Validado',
    };

    return user;
  }
}
