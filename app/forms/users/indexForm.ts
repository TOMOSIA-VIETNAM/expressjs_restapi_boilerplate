import {
  IsInt,
  Length,
  Min,
  Max,
  validate
} from 'class-validator';

export class IndexForm {
  @Length(10, 20)
  first_name: string;

  @Length(10, 20)
  last_name: string;
  
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number;

  valid(): void {
    validate(this).then(errors => {
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
      } else {
        console.log('validation succeed');
      }
    });
  }
}
