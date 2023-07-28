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

getPassengerById(index:number)
{
    return this.passenger[index];
}
setPassenger(passengers: Passenger[]) {
    this.passenger=passengers;
}

updatePassenger(index:number,passenger:Passenger)
{
    this.passenger[index]=passenger;
    this.passengerChanged.next(this.passenger.slice());
}

deletePassenger(index:number)
{
this.passenger.splice(index,1);
this.passengerChanged.next(this.passenger.slice());
}




}