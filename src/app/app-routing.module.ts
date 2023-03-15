import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

//Components
import { ErrorComponent } from './shared/error/error.component';
import { ControlpanelComponent } from './staf/controlpanel/controlpanel.component';
import { MonthlyComponent } from './staf/monthly/monthly.component';
import { PaymentComponent } from './staf/payment/payment.component';
import { StreamingserviceComponent } from './staf/streamingservice/streamingservice.component';
import { UsersComponent } from './staf/users/users.component';
import { UsersservicesComponent } from './staf/usersservices/usersservices.component';
import { LoginAdminComponent } from './staf/login/loginadmin.component';

//Guards
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/controlpanel',
    pathMatch: 'full'
  },
  {
    path: 'controlpanel',
    component: ControlpanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginAdminComponent
  },
  {
    path: 'months',
    component: MonthlyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payments',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'streamings',
    component: StreamingserviceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usersservices',
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
