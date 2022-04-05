import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatsListComponent } from './components/plats-list/plats-list.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { PlatDetailsComponent } from './components/plat-details/plat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatsListComponent,
    AddPlatComponent,
    PlatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
