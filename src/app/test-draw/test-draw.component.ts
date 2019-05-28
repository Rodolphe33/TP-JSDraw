import { Component, OnInit } from '@angular/core';
import { Plan } from '../classes/plan';
import { Point } from '../classes/point';
import { Cercle } from './../classes/cercle';
import { Rectangle } from './../classes/rectangle';

@Component({
   selector: 'app-test-draw',
   templateUrl: './test-draw.component.html',
   styleUrls: ['./test-draw.component.css']
})
export class TestDrawComponent implements OnInit {

   lePlan: Plan = new Plan();

   constructor() { }

   ngOnInit() {
   }

   onAddCercle() {
      const cercleWrk = new Cercle(new Point(10, 20), 100);
      this.lePlan.addFG(cercleWrk);
      /// this.lePlan.display(); ///  Refresh
   }
   onAddRectangle() {
      const rectangleWrk = new Rectangle(new Point(30, 40), 200, 300);
      this.lePlan.addFG(rectangleWrk);
      /// this.lePlan.display(); /// Refresh
   }
}
