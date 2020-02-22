import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';

type ValidatorsFn = ValidatorFn | ValidatorFn[];

export interface UiFormControlOptions {
  formState?: any;
  updateOn?: 'blur' | 'change' | 'submit';
  validatorOrOpts?: ValidatorsFn | AbstractControlOptions;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[];
}
export class UigFormControl extends FormControl {

  constructor(config?: UiFormControlOptions) {

    const { formState, validatorOrOpts, updateOn, asyncValidator } = config;

    super(formState, updateOn ? { updateOn } : validatorOrOpts, asyncValidator);

    if (updateOn && validatorOrOpts) {
      this.setValidators(validatorOrOpts as ValidatorsFn);
    }

    return this;
  }

}
