import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-geometry',
   templateUrl: './geometry.component.html',
   styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {

   valX: number = 0;
   valY: number = 0;
   valHauteur: number = 0;
   valLargeur: number = 0;
   valRayon: number = 0;

   constructor() { }

   ngOnInit() {
   }

}
