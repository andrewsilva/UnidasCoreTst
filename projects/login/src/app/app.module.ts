import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreAngularModule } from '../../core-angular';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [BrowserModule, RouterModule, CoreAngularModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('app-login', elem);
  }

  ngDoBootstrap() {}
}
