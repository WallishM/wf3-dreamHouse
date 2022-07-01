import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProperties:Array<Property> = this.servicePorperty.getListProperties();

  constructor(private servicePorperty:PropertyService, private route:Router) { 
  }

  ngOnInit(): void {
  }

  openDetails(property:Property): void{
    this.route.navigate([`details/`,property.id]);
  }

}
