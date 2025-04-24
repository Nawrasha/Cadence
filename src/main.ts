import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Import your routes configuration

// Bootstrapping the application with routes and RouterModule
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),  // Initialize RouterModule with the routes
  ],
})
  .catch((err) => console.error(err));
