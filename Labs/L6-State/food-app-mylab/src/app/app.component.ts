import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { LoadingService } from './shared/loading/loading.service';
import { MenuService } from './shared/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food App';
  mode: MatDrawerMode = 'side'

  constructor(public ms: MenuService, public ls: LoadingService) {
    this.setMenuPosition();
  }

  ngOnInit() {
    this.setMenuPosition();
    this.getWorkbenchStyle();
  }

  setMenuPosition() {
    this.ms.sideNavPosition$.subscribe((sidenavMode: any) => {
      this.mode = sidenavMode as MatDrawerMode;
    });
  }

  getWorkbenchStyle() {
    let result = {};
    this.ms.sideNavVisible$.subscribe((visible: any) => {
      result = visible
        ? {
            'margin-left': '5px',
          }
        : {};
    });
    return result;
  }
}
