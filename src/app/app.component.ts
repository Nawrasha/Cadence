import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component'

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavBarComponent, FooterComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'your-app-name';
}

