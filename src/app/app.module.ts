import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes} from './app.routes';
import { HomeComponent } from './homepage/home/home.component'; 
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes), 
    CommonModule,
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
