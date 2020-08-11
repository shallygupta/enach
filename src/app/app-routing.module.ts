import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandateComponent } from './mandate/mandate.component';
import { AuthoriseMandComponent } from './authorise-mand/authorise-mand.component';
import { ConfirmMandComponent } from './confirm-mand/confirm-mand.component';
import { RejectMandateComponent } from './reject-mandate/reject-mandate.component';
import { DebitCardComponent } from './debit-card/debit-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bank',
    pathMatch: 'full'
  },
  {path: 'bank', component: MandateComponent},
  {path: 'proceed', component: AuthoriseMandComponent},
  {path: 'confirm', component: ConfirmMandComponent} ,
  {path: 'reject', component: RejectMandateComponent},
  {path: 'debit', component: DebitCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [MandateComponent, AuthoriseMandComponent, ConfirmMandComponent, RejectMandateComponent, DebitCardComponent];
