import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  sideNavVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  sideNavPosition$: BehaviorSubject<string> = new BehaviorSubject('over');

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.sideNavVisible$.next(change.mqAlias == 'xs' ? false : true);
        this.sideNavPosition$.next(change.mqAlias == 'xs' ? 'over' : 'side');
      });
  }

  toggleMenu() {
    let nextVal = !this.sideNavVisible$.value;
    this.sideNavVisible$.next(nextVal);
  }

}
