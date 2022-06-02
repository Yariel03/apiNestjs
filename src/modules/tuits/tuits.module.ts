import { Module } from '@nestjs/common';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

@Module({
  imports: [],
  controllers: [TuitsController],
  providers: [TuitsService],
})
export class TuitsModule {}
