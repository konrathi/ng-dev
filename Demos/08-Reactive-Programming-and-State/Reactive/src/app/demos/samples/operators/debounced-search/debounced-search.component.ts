import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  subsSearchterms: Subscription | null = null;

  searchterm = new FormControl<string | null>('');

  ngOnInit() {
    this.subsSearchterms = this.searchterm.valueChanges
      .pipe(
        debounceTime(750) // wait 750ms after each keystroke
        //operator 2
        //operator 3
      )
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });
  }

  ngOnDestroy() {
    if (this.subsSearchterms) this.subsSearchterms.unsubscribe();
  }
}
