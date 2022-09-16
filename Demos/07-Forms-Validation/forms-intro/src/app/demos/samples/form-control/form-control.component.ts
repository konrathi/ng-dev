import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent implements OnInit {
  constructor() {}

  name = new FormControl('Giro', [
    Validators.required,
    Validators.minLength(3),
  ]);

  postal = new UntypedFormControl('3544', [Validators.minLength(4)]);

  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);

  ngOnInit() {
    this.name.valueChanges.subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.subscribe((data) =>
      console.log('Form status changed', data)
    );
  }

  updateName() {
    this.name.setValue('Soi');
  }

  resetName() {
    this.name.reset('Giro');
  }

  getValue() {
    console.log(this.name.value);
  }
}
