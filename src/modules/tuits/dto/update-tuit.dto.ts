import { IsString } from 'class-validator';

export class UpdateTuit {
  @IsString()
  readonly message: string;
}
