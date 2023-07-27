import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PassengerService } from "./passenger.service";


@Component(
    {
        selector:'app-passenger',
        templateUrl:'./passenger.component.html'

    }
)

export class PassengerComponent implements OnInit{
    passengerForm:FormGroup;

constructor(private passengerService:PassengerService)
{

}

    ngOnInit(){

this.initForm();
        
    }

onSubmit()
{
this.passengerService.AddPassenger(this.passengerForm.value);
console.log(this.passengerForm.value);
}


    private initForm() {

let passengerFirstName='';
let passengerLastName='';
let passengerAddress='';
let passengerPassport='';
let passengerBirthdate='';
let passengerSeatNumber='';
let passengerCheckedIn='';
let passengerspecialMeal='';
let passengerinfants='';
let passengerwheelChair='';
let passengerancillaryServices='';

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