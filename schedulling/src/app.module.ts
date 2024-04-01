import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedullingModule } from './modules/schedulling/schedulling.module';

@Module({
  imports: [SchedullingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
