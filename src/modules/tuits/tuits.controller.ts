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
import { UpdateTuit } from './dto/update-tuit.dto';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly wsTuit: TuitsService) {}
  @Get()
  getTuits() {
    return this.wsTuit.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id: number) {
    return this.wsTuit.getTuit(Number(id));
  }

  @Post()
  postTuit(@Body() message: CreateTuit) {
    return this.wsTuit.postTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() message: UpdateTuit) {
    return this.wsTuit.updateTuit(Number(id), message);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: number) {
    return this.wsTuit.deleteTuit(Number(id));
  }
}
