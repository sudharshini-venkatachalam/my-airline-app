import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Flight } from "./flight.model";



@Injectable(
    {
        providedIn:'root'
    }
)


export class FlightService{

flightChanged=new Subject<Flight[]>();





private flight:Flight[]=[

new Flight('Emirates','https://tse4.mm.bing.net/th/id/OIP.Q63o0WoqHpI700KwiubfVQHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7','Delhi'),
new Flight('Air India','https://tse2.mm.bing.net/th/id/OIP.g8PXPNEvPG800AOMwzrZoAHaD4?pid=ImgDet&rs=1','Mumbai')

];

getFlights()
{
    return this.flight.slice();
}





}