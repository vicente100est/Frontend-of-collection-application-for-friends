import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

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
import { LoginUserComponent } from './ui/login/login.component';
import { LoginAdminComponent } from './staf/login/loginadmin.component';

//Guards
import { AuthGuard } from './auth/auth.guard';

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
    path: 'login',
    component: LoginUserComponent
  },
  {
    path: 'mypayments',
    component: MypaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mystreamings',
    component: MystreamingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/controlpanel',
    component: ControlpanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/login',
    component: LoginAdminComponent
  },
  {
    path: 'staf/months',
    component: MonthlyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/payments',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/streamings',
    component: StreamingserviceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'staf/usersservices',
    component: UsersservicesComponent,
    canActivate: [AuthGuard]
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
