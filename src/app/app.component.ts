import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component'; 
import { ProfilComponent } from './profil/profil.component';  
import { CreateaccComponent } from './profil/createacc/createacc.component';
import { AccounteComponent } from './accounte/accounte.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { routes } from './app.routes';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavBarComponent, FooterComponent, HomeComponent, ProfilComponent , CreateaccComponent , AccounteComponent , WishlistComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app-name';
}
