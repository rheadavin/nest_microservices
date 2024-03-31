import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    constructor(){}
    
    async get_total_users(){
        return {
            total: 100
        }
    }
}
