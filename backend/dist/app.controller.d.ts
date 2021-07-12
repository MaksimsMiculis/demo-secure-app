import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UsersService } from './user/user.service';
export declare class AppController {
    private readonly appService;
    private userService;
    constructor(appService: AppService, userService: UsersService);
    getHello(): string;
    getUsers(): Promise<User[]>;
}
