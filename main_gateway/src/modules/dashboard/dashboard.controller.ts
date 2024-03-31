import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('dashboard')
export class DashboardController {
    constructor(
        @Inject('DASHBOARD_SERVICE') private readonly dashboard_client: ClientProxy
    ){}

    @Get('get_total_users')
    async getTotalUsers(){
        return this.dashboard_client.send(
            { cmd: 'get_total_users' },
            { }
        )
    }
}
