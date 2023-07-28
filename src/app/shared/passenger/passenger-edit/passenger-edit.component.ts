import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataStorageService } from "../../dataStorage.service";
import { PassengerService } from "../passenger.service";
import { Passenger } from "../passenger.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component(
    {
        selector:'app-passenger-edit',
        templateUrl:'./passenger-edit.component.html'
    }
)




export class PassengerEditComponent implements OnInit{ 
    passengerForm:FormGroup;
    editMode=false;
id:number;




    constructor(private passengerService:PassengerService,
        private dataStorageService:DataStorageService,
        private route:ActivatedRoute,
        private router:Router)
    {
    
    }
    
        ngOnInit(){
    
            this.route.params.subscribe(
                (params:Params)=> {
                  this.id =+params['id'];
                  this.editMode=params['id'] !=null;
                  this.initForm();
                }
              )
            
        }
    
    onSubmit()
    {
const newPassenger= new Passenger(

this.passengerForm.value['firstName'],
this.passengerForm.value['lastName'],
this.passengerForm.value['address'],
this.passengerForm.value['passport'],
this.passengerForm.value['birthdate'],
this.passengerForm.value['seatNumber'],
this.passengerForm.value['checkedIn'],
this.passengerForm.value['specialMeal'],
this.passengerForm.value['infants'],
this.passengerForm.value['wheelchair'],
this.passengerForm.value['ancillaryservices']
);

if(this.editMode)
{
    this.passengerService.updatePassenger(this.id,newPassenger);
    this.dataStorageService.storePassenger();
}
else{
    this.passengerService.AddPassenger(this.passengerForm.value);
    this.dataStorageService.storePassenger();
    }
    this.onCancel();
}
onCancel()
{
this.router.navigate(['../'],{relativeTo : this.route});
}
    
        private initForm() {
    
    let passengerFirstName='';
    let passengerLastName='';
    let passengerAddress='';
    let passengerPassport='';
    let passengerBirthdate='';
    let passengerSeatNumber='';
    let passengerCheckedIn:boolean;
    let passengerspecialMeal:boolean;
    let passengerinfants:boolean;
    let passengerwheelChair:boolean;
    let passengerancillaryServices:boolean;


if(this.editMode)
{
    const passenger=this.passengerService.getPassengerById(this.id);
passengerFirstName=passenger.firstName;
passengerLastName=passenger.lastName;
passengerAddress=passenger.address;
passengerPassport=passenger.passport;
passengerBirthdate=passenger.birthdate;
passengerSeatNumber=passenger.seatNumber;
passengerCheckedIn=passenger.checkedIn;
passengerspecialMeal=passenger.specialMeal;
passengerinfants=passenger.infants;
passengerwheelChair=passenger.wheelchair;
passengerancillaryServices=passenger.ancillaryServices;



}  
    this.passengerForm = new FormGroup({
                'firstName': new FormControl(
                  passengerFirstName,
                  Validators.required
                ),
                'lastName': new FormControl(
                  passengerLastName,
                  Validators.required
                ),
                'address': new FormControl(
                 passengerAddress,
                  Validators.required
                ),
                'passport': new FormControl(
                 passengerPassport,
                  Validators.required
                ),
               'birthdate': new FormControl(
                  new Date(passengerBirthdate).toString(),
                  Validators.required
                ),
                'seatNumber': new FormControl(passengerSeatNumber, [
                  Validators.required,
                  Validators.pattern('[a-fA-F]{1}(20|[0-1][0-9]|[0-9])'),
                ]),
                'checkedIn': new FormControl(
                  passengerCheckedIn,
                  Validators.required
                ),
                'specialMeal': new FormControl(
                  passengerspecialMeal,
                  Validators.required
                ),
                'infants': new FormControl(
                passengerinfants,
                  Validators.required
                ),
                'wheelChair': new FormControl(
                  passengerwheelChair,
                  Validators.required
                ),
                'ancillaryServices': new FormControl(
                  passengerancillaryServices,
                  Validators.required
                )
        })
      }
    


}