import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//@angular/material
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

//Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MonthlyComponent } from './staf/monthly/monthly.component';
import { PaymentComponent } from './staf/payment/payment.component';
import { StreamingserviceComponent } from './staf/streamingservice/streamingservice.component';
import { UsersComponent } from './staf/users/users.component';
import { UsersservicesComponent } from './staf/usersservices/usersservices.component';
import { HomeComponent } from './ui/home/home.component';
import { MypaymentComponent } from './ui/mypayment/mypayment.component';
import { MystreamingComponent } from './ui/mystreaming/mystreaming.component';
import { ErrorComponent } from './shared/error/error.component';
import { ControlpanelComponent } from './staf/controlpanel/controlpanel.component';
import { DialogStreamingComponent } from './staf/streamingservice/dialog/dialogstreaming.component';
import { DialogMonthlyComponent } from './staf/monthly/dialog/dialogmonthly.component';
import { DialogUsersComponent } from './staf/users/dialog/dialogusers.component';
import { DialogUSComponent } from './staf/usersservices/dialog/dialogus.component';
import { DialogPaymentsComponent } from './staf/payment/dialog/dialogpayment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MonthlyComponent,
    PaymentComponent,
    StreamingserviceComponent,
    UsersComponent,
    UsersservicesComponent,
    HomeComponent,
    MypaymentComponent,
    MystreamingComponent,
    ErrorComponent,
    ControlpanelComponent,
    DialogStreamingComponent,
    DialogMonthlyComponent,
    DialogUsersComponent,
    DialogUSComponent,
    DialogPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
