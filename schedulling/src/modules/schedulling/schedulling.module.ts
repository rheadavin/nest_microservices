import { Module } from '@nestjs/common';
import { SchedullingController } from './schedulling.controller';
import { SchedullingService } from './schedulling.service';

@Module({
  controllers: [SchedullingController],
  providers: [SchedullingService]
})
export class SchedullingModule {}
