import { Component } from "@angular/core";
import { Passenger } from "../passenger.model";
import { PassengerService } from "../passenger.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { OnInit } from "@angular/core";



@Component(
    {
        selector:'app-passengerlist',
        templateUrl:'./passenger-list.component.html'
    }
)




export class PassengerListComponent implements OnInit{
passenger:Passenger;
    id:number;
constructor(private passengerService:PassengerService,private route:ActivatedRoute,private router:Router)
{}

ngOnInit() {
    this.route.params.subscribe((
      params:Params
    )=> {this.id =+params['id'];
  this.passenger=this.passengerService.getPassengerById(this.id);
  });
  }




datasource:Passenger[]=this.passengerService.getPassenger();




onEditPassenger()
{
    this.router.navigate(['edit'],{relativeTo:this.route});
}
onAddPassenger()
{
this.router.navigate(['new'],{relativeTo:this.route});
}

onDeletePassenger()
{
    this.passengerService.deletePassenger(this.id);
    this.router.navigate(['passengers']);
}


}