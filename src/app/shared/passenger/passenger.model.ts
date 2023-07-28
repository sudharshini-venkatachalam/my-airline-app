export class Passenger {
    firstName: string;
    lastName: string;
    address: string;
    passport: string;
    birthdate: string;
    seatNumber: string;
    checkedIn: boolean;
    specialMeal: boolean;
    infants: boolean;
    wheelchair: boolean;
    ancillaryServices: boolean;
    

    constructor(firstName: string,
        lastName: string,
        address: string,
        passport: string,
        birthdate: string,
        seatNumber: string,
        checkedIn: boolean,
        specialMeal: boolean,
        infants: boolean,
        wheelchair: boolean,
        ancillaryServices: boolean) {



this.firstName=firstName;
this.lastName=lastName;
this.address=address;
this.passport=passport;
this.birthdate=birthdate;
this.seatNumber=seatNumber;
this.checkedIn=checkedIn;
this.specialMeal=specialMeal;
this.infants=infants;
this.wheelchair=wheelchair;
this.ancillaryServices=ancillaryServices;








    }

}