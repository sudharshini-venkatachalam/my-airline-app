import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flight } from './flight.model';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit,OnDestroy {


subscription:Subscription;
@Output() flights:Flight[];


  constructor(private flightService:FlightService) { }

  ngOnInit() {

this.flights=this.flightService.getFlights();


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
