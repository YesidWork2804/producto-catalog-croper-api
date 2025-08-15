// src/auth/strategies/jwt.strategy.ts (CON DEBUG DE TOKEN)
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        console.log(
          '🔍 Headers completos:',
          JSON.stringify(req.headers, null, 2),
        );

        const authHeader = req.headers.authorization;
        console.log('🔍 Authorization header:', authHeader);

        if (!authHeader) {
          console.log('❌ No hay header de autorización');
          return null;
        }

        const token = authHeader.replace('Bearer ', '');
        console.log(
          '🔍 Token extraído (primeros 50 chars):',
          token.substring(0, 50) + '...',
        );
        console.log(
          '🔍 Token extraído (últimos 50 chars):',
          '...' + token.substring(token.length - 50),
        );
        console.log('🔍 Longitud total del token:', token.length);

        // Verificar que tiene 3 partes separadas por puntos
        const parts = token.split('.');
        console.log('🔍 Partes del token:', parts.length);
        console.log(
          '🔍 Longitud de cada parte:',
          parts.map((p) => p.length),
        );

        return token;
      },
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key-change-in-production',
    });
  }

  async validate(payload: any) {
    console.log(
      '🔍 JWT Strategy - Payload recibido:',
      JSON.stringify(payload, null, 2),
    );

    const user = {
      userId: payload.sub,
      email: payload.email,
      nombre: 'Usuario Validado',
    };

    console.log(
      '✅ JWT Strategy - Usuario validado:',
      JSON.stringify(user, null, 2),
    );
    return user;
  }
}
