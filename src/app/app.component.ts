import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Part3Component } from './part3/part3.component'; // Ensure you import Part3Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, Part3Component] // Add Part3Component to imports array
})
export class AppComponent {
  title = 'your-app-name';
}

