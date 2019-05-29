import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanService } from '../plan.service';
import { Cercle } from '../classes/cercle';
import { Point } from '../classes/point';
import { Rectangle } from '../classes/rectangle';
import { GeometryComponent } from '../geometry/geometry.component';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   @ViewChild('geometry') refGeometry: GeometryComponent;

   valSelect: string;

   constructor(public srvPlan: PlanService) { }



   ngOnInit() {
   }

   onAddCercle() {
      /// const cercleWrk = new Cercle(new Point(10, 20), 100);
      const cercleWrk = new Cercle(new Point(this.refGeometry.valX, this.refGeometry.valY), this.refGeometry.valRayon);
      this.srvPlan.instancePlan.addFG(cercleWrk);
      /// this.srvPlan.instancePlan.display(); ///  Refresh
      this.srvPlan.notificationRefresh.next(true);
   }
   onAddRectangle() {
      /// const rectangleWrk = new Rectangle(new Point(30, 40), 200, 300);
      // tslint:disable-next-line:max-line-length
      const rectangleWrk = new Rectangle(new Point(this.refGeometry.valX, this.refGeometry.valY), this.refGeometry.valHauteur, this.refGeometry.valLargeur);
      this.srvPlan.instancePlan.addFG(rectangleWrk);
      /// this.srvPlan.instancePlan.display(); /// Refresh
      this.srvPlan.notificationRefresh.next(true);
   }
   onSaveDessin() {
      this.srvPlan.saveDessin2LocalStorage();
   }

   onLoadDessin() {
      this.srvPlan.loadDessinFromLocalstorage();
   }

   onClearDessin() {
      this.srvPlan.clearDessin();
   }
   onLstChange() {
      console.log(this.valSelect);
      this.srvPlan.instancePlan.name = this.valSelect;
      this.srvPlan.loadDessinFromLocalstorage();
   }

}
