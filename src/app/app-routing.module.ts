import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ErrorComponent } from './shared/error/error.component';
import { ControlpanelComponent } from './staf/controlpanel/controlpanel.component';
import { MonthlyComponent } from './staf/monthly/monthly.component';
import { PaymentComponent } from './staf/payment/payment.component';
import { StreamingserviceComponent } from './staf/streamingservice/streamingservice.component';
import { HomeComponent } from './ui/home/home.component';
import { MypaymentComponent } from './ui/mypayment/mypayment.component';
import { MystreamingComponent } from './ui/mystreaming/mystreaming.component';
import { UsersComponent } from './staf/users/users.component';
import { UsersservicesComponent } from './staf/usersservices/usersservices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mypayments',
    component: MypaymentComponent
  },
  {
    path: 'mystreamings',
    component: MystreamingComponent
  },
  {
    path: 'staf/controlpanel',
    component: ControlpanelComponent
  },
  {
    path: 'staf/months',
    component: MonthlyComponent
  },
  {
    path: 'staf/payments',
    component: PaymentComponent
  },
  {
    path: 'staf/streamings',
    component: StreamingserviceComponent
  },
  {
    path: 'staf/users',
    component: UsersComponent
  },
  {
    path: 'staf/usersservices',
    component: UsersservicesComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
