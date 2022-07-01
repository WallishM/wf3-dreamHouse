import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  listProperties:Array<Property> = this.servicePorperty.getListProperties();
  tempProperty:Property = new Property();

  constructor(private servicePorperty:PropertyService, private route:Router) { 
  }

  ngOnInit(): void {
  }

  openEdit(property:Property): void{
    this.route.navigate([`edit/`,property.id]);
  }

  newEdit():void{
    this.tempProperty = new Property('Nouvelle annonce');
    this.servicePorperty.getListProperties().push(this.tempProperty);
    this.route.navigate([`edit/`,this.tempProperty.id]);
  }
}
