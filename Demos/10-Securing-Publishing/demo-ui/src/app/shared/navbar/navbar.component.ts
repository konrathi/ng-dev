import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu/menu-item.model';
import { MenuService } from '../menu/menu.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private ms: MenuService, private sns: SnackbarService) {}

  editorDisplayed: boolean = false;
  menuItems: Observable<MenuItem[]> | null = null;

  ngOnInit() {
    this.editorDisplayed = false;
    this.menuItems = this.ms.getTopItems();
  }

  toggleMenu() {
    this.ms.toggleMenu();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented! - just a mock');
  }
}
