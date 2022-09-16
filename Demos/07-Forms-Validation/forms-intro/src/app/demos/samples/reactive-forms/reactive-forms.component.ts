import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  personForm = new FormGroup({
    name: new FormControl(this.person.name, Validators.required),
    age: new FormControl(this.person.age),
    email: new FormControl(this.person.email),
    gender: new FormControl(this.person.gender),
    wealth: new FormControl(this.person.wealth),
  });

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      // Could be setValue if model is implemented with all props in form
      // Oherwise use patchValue
      this.personForm.patchValue(p);
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
