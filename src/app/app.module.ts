import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MandateComponent } from './mandate/mandate.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthoriseMandComponent } from './authorise-mand/authorise-mand.component';
import { ConfirmMandComponent } from './confirm-mand/confirm-mand.component';
import { RejectMandateComponent } from './reject-mandate/reject-mandate.component';
import { DebitCardComponent } from './debit-card/debit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MandateComponent,
    AuthoriseMandComponent,
    RoutingComponent,
    ConfirmMandComponent,
    RejectMandateComponent,
    DebitCardComponent
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
