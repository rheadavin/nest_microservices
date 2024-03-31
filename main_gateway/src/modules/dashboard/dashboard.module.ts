import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DASHBOARD_SERVICE',
        transport: Transport.TCP,
        options: { port: 5001 }
      }
    ])
  ],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
