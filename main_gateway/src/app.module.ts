import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SchedullingModule } from './modules/schedulling/schedulling.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DashboardModule, SchedullingModule],
})
export class AppModule {}
