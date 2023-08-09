import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HumansComponent } from './humans/humans.component';
import { DifferentComponent } from './different/different.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HumansComponent,
    DifferentComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
