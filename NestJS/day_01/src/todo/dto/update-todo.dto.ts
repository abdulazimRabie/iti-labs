/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  IsBoolean,
} from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(300)
  description?: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
