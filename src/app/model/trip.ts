import {Time} from "@angular/common";

export class Trip {


  id: number;
  cityTo: number;
  countOfDays: String;
  countOfPerson: String;
  departureDate: Time;
  description: String;
  priceForAdult: number;
  priceForChild: number;
  promotion: number;
  returnDate: Time;
  airportEntityFrom: number;
  airportEntityTo: number;
  hotelEntity: number;

}
