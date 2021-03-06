import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.entity';
import { UsersService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'demo',
      password: 'demo',
      database: 'demo',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),

    ConfigModule.forRoot(),
    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService, UsersService],

})
export class AppModule { }
