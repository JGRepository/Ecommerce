import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { HeaderComponent } from './header/header.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ShoppingItemsComponent } from './shopping-items/shopping-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ContacUsComponent,
    HeaderComponent,
    VitrineComponent,
    ShoppingItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
