//provide auth-basic.strategy
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule,
  
    PassportModule.register({
      defaultStrategy: 'basic',
      property: 'user',
      session: false,
  }),

  
  ],
  providers: [BasicStrategy],
})
export class AuthModule {}


