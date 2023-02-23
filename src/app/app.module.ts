import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//@angular/material
import { MatIconModule } from '@angular/material/icon';

//Components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MonthlyComponent } from './staf/monthly/monthly.component';
import { PaymentComponent } from './staf/payment/payment.component';
import { StreamingserviceComponent } from './staf/streamingservice/streamingservice.component';
import { UsersComponent } from './staf/users/users.component';
import { UsersservicesComponent } from './staf/usersservices/usersservices.component';
import { HomeComponent } from './ui/home/home.component';
import { MypaymentComponent } from './ui/mypayment/mypayment.component';
import { MystreamingComponent } from './ui/mystreaming/mystreaming.component';
import { UserdataComponent } from './ui/userdata/userdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MonthlyComponent,
    PaymentComponent,
    StreamingserviceComponent,
    UsersComponent,
    UsersservicesComponent,
    HomeComponent,
    MypaymentComponent,
    MystreamingComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
