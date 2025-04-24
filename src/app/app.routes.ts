import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component'; 
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ArticlepageComponent } from './pages/articlepage/articlepage.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ListArticleComponent } from './article/list-article/list-article.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'articlepage', component: ArticlepageComponent },
  { path: 'collections', component: CollectionsComponent},
  { path: 'list-article/:category', component: ListArticleComponent},
];