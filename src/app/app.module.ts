import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuotesService } from './services/quotes.service';
import { AppRoutingModule } from './app-routing.module';
import { QDetailsComponent } from './q-details/q-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesListComponent,
    QDetailsComponent,
    NotFoundComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
