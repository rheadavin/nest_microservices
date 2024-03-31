import { Controller } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('dashboard')
export class DashboardController {
    constructor(
        private readonly dashboardService: DashboardService
    ){}

    @MessagePattern({ cmd: 'get_total_users' })
    async get_total_users(){
        return await this.dashboardService.get_total_users();
    }
}
