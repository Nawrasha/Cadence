import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateaccComponent } from './profil/createacc/createacc.component';
import { AccounteComponent } from './pages/accounte/accounte.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

import { routes } from './app.routes';  // Ensure routes is correctly imported

@Component({
  selector: 'app-root',
  standalone: true,  // Make sure this is necessary for your setup
  imports: [
    RouterModule, 
    NavBarComponent, 
    FooterComponent, 
    ProfilComponent, 
    CreateaccComponent, 
    AccounteComponent, 
    WishlistComponent, 
    CartComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app-name';
}
