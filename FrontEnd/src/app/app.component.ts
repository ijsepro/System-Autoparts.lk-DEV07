import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;
   tok="";

  constructor(private router: Router) {}

  get token() {
    this.tok=localStorage.getItem('token');

    return this.tok;
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);//direc  to home
  }

  search() {}
}
