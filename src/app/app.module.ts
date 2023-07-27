import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlightComponent } from './flight/flight.component';
import { FlightDetailComponent } from './flight/flight-detail/flight-detail.component';
import { CheckInComponent } from './check-in/check-in.component';
import { InFlightComponent } from './in-flight/in-flight.component';
import { PassengerComponent } from './shared/passenger/passenger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatDividerModule, MatDialogModule, MatAutocompleteModule, MatChipsModule, MatExpansionModule, MatNativeDateModule, MatRippleModule, MatSlideToggleModule, MatTableModule, MatTabsModule, MatToolbarModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightComponent,
    FlightDetailComponent,
    CheckInComponent,
    InFlightComponent,
    PassengerComponent
   
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     MatExpansionModule,
     MatToolbarModule,
     MatButtonModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     MatInputModule,
     MatRippleModule,
     MatSelectModule,
     MatDialogModule,
     MatDividerModule,
    FormsModule,
     MatSlideToggleModule,
     MatTableModule,
     MatCheckboxModule,
     MatRadioModule,
     MatChipsModule,
     MatTabsModule,
     MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
