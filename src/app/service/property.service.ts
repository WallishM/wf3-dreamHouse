import { Injectable } from '@angular/core';
import { LISTPROPERTIES } from 'src/db/listProperties';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  propertyTemp:Property = new Property(``, ``, ``, 0, [], [], [], []);

  constructor() {
   }

  getListProperties(): Array<Property>{
    return LISTPROPERTIES;
  }

  addProperties(newProperty:Property): Array<Property>{
    LISTPROPERTIES.push(newProperty);
    return LISTPROPERTIES;
  }

  removeProperty(id:string): Array<Property>{
    if(id != ``){
      console.log(this.getListProperties().indexOf(this.getPropertyById(id)));
      this.getListProperties().splice(this.getListProperties().indexOf(this.getPropertyById(id)),1);
    }

    return this.getListProperties();
  }

  getPropertyById(id:string): Property{
    this.propertyTemp =  new Property(``, ``, ``, 0, [], [], [], []);

    if(id != ``){
      this.propertyTemp = (this.getListProperties().find(element => element.id == id)) as Property;
    }
    return this.propertyTemp;
  }
}
