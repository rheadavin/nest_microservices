import { Module } from '@nestjs/common';
import { SchedullingController } from './schedulling.controller';
import { SchedullingService } from './schedulling.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCHEDULLING_SERVICE',
        transport: Transport.TCP,
        options: { port: 5002 }
      }
    ])
  ],
  controllers: [SchedullingController],
  providers: [SchedullingService]
})
export class SchedullingModule {}
