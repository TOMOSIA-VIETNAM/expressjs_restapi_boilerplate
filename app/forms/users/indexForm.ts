import { IsInt, Length, Min, Max } from 'class-validator';
import ApplicationForm from '../applicationForm';

export class IndexForm extends ApplicationForm {
  @Length(10, 20)
  first_name: string;

  @Length(10, 20)
  last_name: string;
  
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number;
}
