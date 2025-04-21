import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { CreateaccComponent } from './profil/createacc/createacc.component';
import { AccounteComponent } from './accounte/accounte.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'contact' , component: ContactComponent},
  { path: 'createacc', component: CreateaccComponent},
  { path: 'account', component: AccounteComponent},
  { path: 'wishlist' , component: WishlistComponent}
];
