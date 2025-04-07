import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { FirstComponent } from './homepage/first/first.component';
import { SecondComponent } from "./homepage/second/second.component";
import { ThirdComponent } from './homepage/third/third.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, FirstComponent, SecondComponent,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'your-app-name';
}

