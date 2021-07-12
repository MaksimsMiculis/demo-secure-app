import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UsersService,
  ) { }

  @Get()
  @UseGuards(AuthGuard('basic'))
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}