import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/property';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild(`contentModal`) templateRef:ElementRef;
  closeResult = ``;

  currentProperty:Property = new Property();

  constructor(
    private propertyService:PropertyService, 
    private activatedRoute:ActivatedRoute, 
    private route:Router){ }

  ngOnInit(): void {
    this.currentProperty = this.propertyService.getPropertyById(this.activatedRoute.snapshot.params[`id`]);
  }

  saveAndBack(){
    this.goBack();
  }
  deleteAndBack(){
    this.propertyService.removeProperty(this.currentProperty.id);
    this.goBack();
  }

  goBack():void{
    this.route.navigate([``]);
  }
}
