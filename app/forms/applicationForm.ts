import { validate } from 'class-validator';
interface FormInterface {
  error: object[];
  valid(): boolean;
  invalid(): boolean;
}

interface FormAttrError {
  property: string;
  message: string;
  code: string;
}

export default class ApplicationForm implements FormInterface {
  error: FormAttrError[] = [];

  valid(): boolean {
    let valid = true;

    validate(this).then(errors => {
      if (errors.length > 0) {
        errors.forEach(e => {
          this.error.push({
            property: e.property,
            message:  Object.values(e.constraints)[0],
            code:     Object.keys(e.constraints)[0]
          });
        });

        valid = false;
      }
    });
    return valid;
  }

  invalid(): boolean {
    return !this.valid();
  }
}
