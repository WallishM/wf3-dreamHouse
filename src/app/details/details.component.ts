import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../model/booking';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  currentProperty:Property = new Property();
  tempBooking:Booking = new Booking();
  tempStartDate:Date = new Date();
  tempEndDate:Date = new Date();
  tempClient:string = '';

  constructor(private propertyService:PropertyService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProperty = this.propertyService.getPropertyById(this.activatedRoute.snapshot.params[`id`]);
  }

  booking(): void{

    this.tempBooking = new Booking();
    this.tempBooking.client = this.tempClient;
    this.tempBooking.endDate = new Date(this.tempEndDate);
    this.tempBooking.startDate = new Date(this.tempStartDate);

    this.tempBooking.nigthNumber = Math.ceil((this.tempBooking.endDate.getTime()-this.tempBooking.startDate.getTime())/(24*60*60*1000));
    this.tempBooking.price= this.tempBooking.nigthNumber*this.currentProperty.pricePerNigth;

    if(this.tempBooking.price > 0)
      this.currentProperty.bookingList.push(this.tempBooking);
  }

  deleteBooking(booking:Booking): void{
    this.currentProperty.bookingList.splice(this.currentProperty.bookingList.indexOf(booking),1);
  }

}
