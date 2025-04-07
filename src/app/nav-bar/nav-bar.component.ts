import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuOpen = false;

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.menuOpen = !this.menuOpen;
  }

}
