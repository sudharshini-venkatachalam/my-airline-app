import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Passenger } from "./passenger.model";



@Injectable({
    providedIn:'root'
})


export class PassengerService{



passengerChanged=new Subject<Passenger[]>();

private passenger:Passenger[]=[];


AddPassenger(passenger:Passenger){
    this.passenger.push(passenger);
this.passengerChanged.next(this.passenger.slice());

}

getPassenger()
{
    return this.passenger.slice();
    
}











}