import { Controller } from '@nestjs/common';
import { SchedullingService } from './schedulling.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('schedulling')
export class SchedullingController {
    constructor(
        private readonly schedullingService: SchedullingService
    ){}

    @MessagePattern({ cmd: 'hello' })
    get_total_users(){
        return this.schedullingService.hello();
    }
}
