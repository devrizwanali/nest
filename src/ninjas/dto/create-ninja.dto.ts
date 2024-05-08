import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  id: number;
  @MinLength(3)
  name: string;
  @IsEnum(['Expert', 'Intermediate'], {message: 'Use correct type! (Intermediate or Expert)'})
  type: 'Expert' | 'Intermediate';
}
