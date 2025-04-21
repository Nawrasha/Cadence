import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component'; 
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateaccComponent } from './profil/createacc/createacc.component';
import { AccounteComponent } from './pages/accounte/accounte.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'articlepage', component: ArticlepageComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'list-article/:category', component: ListArticleComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'createacc', component: CreateaccComponent },
  { path: 'account', component: AccounteComponent },
  { path: 'wishlist', component: WishlistComponent }
];
