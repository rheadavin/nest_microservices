import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedullingService {
    constructor(){}

    hello(){
        return 'hello from schedulling'
    }
}
