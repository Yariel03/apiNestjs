import { IsString } from 'class-validator';
import { isString } from 'util';

export class CreateTuit {
  @IsString()
  readonly message: string;
}
