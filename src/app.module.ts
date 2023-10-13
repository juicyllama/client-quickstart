import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from '@juicyllama/core';

@Module({
  imports: [
    forwardRef(() => AccountModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
