import { Injectable } from '@nestjs/common';

@Injectable()
export class TuitsService {
  private tuits = [
    { id: '1', message: 'Hello twits!' },
    { id: '2', message: 'Hello twits! 2' },
    { id: '3', message: 'Hello twits! 3' },
  ];
  getTuits() {
    return this.tuits;
  }
  getTuit(id: string) {
    return this.tuits.find((tuit) => tuit.id === id);
  }
  postTuit(message: string) {
    this.tuits.push({
      id: (Math.floor(Math.random() * 100) + 1).toString(),
      message,
    });
  }
  updateTuit(id: string, message: any) {
    const tuit = this.getTuit(id);
    tuit.message = message;
  }
  deleteTuit(id: string) {
    const tuitIndex = this.tuits.findIndex((tuit) => tuit.id === id);
    this.tuits.splice(tuitIndex, 1);
  }
}
