
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PassengerService } from "./passenger/passenger.service";
import {tap } from "rxjs/operators";
import { Passenger } from "./passenger/passenger.model";


@Injectable(
    {
        providedIn:'root'
    }
)


export class DataStorageService{


constructor(private http:HttpClient,private passengerService:PassengerService)
{

}

storePassenger(){
   const passenger=this.passengerService.getPassenger(); 

   this.http.put('https://airline-app-98406-default-rtdb.firebaseio.com/passenger.json',passenger).subscribe(response => {
    console.log(response);
   });

}

fetchPassenger()
{
        return   this.http.get<Passenger[]>('https://ng-course-recipe-book-11f74-default-rtdb.firebaseio.com/passenger.json' 
        ).pipe(
    
    tap(passengers=>{
        this.passengerService.setPassenger(passengers);
    })
    
    
    );

}
}
