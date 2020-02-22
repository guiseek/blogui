import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { UigFormControl } from '../forms/form-control';

@Component({
  selector: 'uig-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent {

  @Output() subscribe = new EventEmitter<string>();
  isSubmitted = false;

  email = new FormControl({
    value: '',
    disabled: true,
    updateOn: 'blur'
  }, [
    Validators.required,
    Validators.email
  ]);

  showError({ touched, dirty, invalid }) {
    return touched && dirty && invalid;
  }

  onSubscribe() {
    this.isSubmitted = true;
    console.log(this.email.valid)
    window.setTimeout(() => {
      this.isSubmitted = false;
    }, 6000);
  }
}
