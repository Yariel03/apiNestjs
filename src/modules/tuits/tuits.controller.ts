import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTuit } from './dto';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly wsTuit: TuitsService) {}
  @Get()
  getTuits() {
    return this.wsTuit.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id) {
    return this.wsTuit.getTuit(id);
  }

  @Post()
  postTuit(@Body() message: CreateTuit) {
    return this.wsTuit.postTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') message: any) {
    return this.wsTuit.updateTuit(id, message);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string) {
    return this.wsTuit.deleteTuit(id);
  }
}
