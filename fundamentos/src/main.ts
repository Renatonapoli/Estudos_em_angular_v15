import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Evita uma segunda verificação do ngDocheck, ngAfterContentChecked e
// ngAfterViewChecked. Isso seria feito em modo dev, sendo desativado, melhora a
// performance em produção.

enableProdMode();
