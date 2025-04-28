import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './homepage/home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateaccComponent } from './profil/createacc/createacc.component';
import { AccounteComponent } from './pages/accounte/accounte.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { appRoutes } from './app.routes';  // Ensure that appRoutes are imported here

@Component({
  selector: 'app-root',
  standalone: true,   
  imports: [
    RouterModule,
    NavBarComponent, 
    FooterComponent, 
    HomeComponent, 
    ProfilComponent, 
    CreateaccComponent, 
    AccounteComponent, 
    WishlistComponent, 
    CartComponent,
    AboutUsComponent,
    FaqComponent,
    ArticlepageComponent,
    CollectionsComponent,
    ListArticleComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app-name';
}
