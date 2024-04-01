import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('schedulling')
export class SchedullingController {
    constructor(
        @Inject('SCHEDULLING_SERVICE') private readonly dashboard_client: ClientProxy
    ){}

    @Get('hello')
    async helloSchedulling(){
        return this.dashboard_client.send(
            { cmd: 'hello' },
            { }
        )
    }
}
