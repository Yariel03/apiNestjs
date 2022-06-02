import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTuit, UpdateTuit } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tuit } from './entity/tuit.entity';

@Injectable()
export class TuitsService {
  constructor(
    @InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>,
  ) {}

  private tuits = [
    { id: '1', message: 'Hello twits!' },
    { id: '2', message: 'Hello twits! 2' },
    { id: '3', message: 'Hello twits! 3' },
  ];
  async getTuits() {
    return await this.tuitRepository.find();
  }
  async getTuit(id: number) {
    const tuiit = await this.tuitRepository.findOne({ where: { id } });
    if (!tuiit) {
      throw new NotFoundException();
    }
    return tuiit;
  }
  async postTuit({ message }: CreateTuit) {
    const tuit = this.tuitRepository.create({ message });
    return await this.tuitRepository.save(tuit);
  }
  async updateTuit(id: number, { message }: UpdateTuit) {
    const tuit = await this.tuitRepository.preload({ id, message });
    if (!tuit) {
      throw new NotFoundException();
    }
    return await this.tuitRepository.save(tuit);
  }
  async deleteTuit(id: number) {
    const tuit = await this.tuitRepository.findOne({ where: { id } });

    const tuitIndex = await this.tuitRepository.remove(tuit);
  }
}
