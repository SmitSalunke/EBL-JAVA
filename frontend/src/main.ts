import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppRoutingModule } from './app/app-routing.module';
=======
import { AppModule } from './app/app.module';
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppRoutingModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> 9068d3cb007e3facb0f775f6314a5efc24ec142c
  .catch(err => console.error(err));
