import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Cercle } from '../classes/cercle';
import { Point } from '../classes/point';
import { Rectangle } from '../classes/rectangle';

@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   constructor(public srvPlan: PlanService) { }



ngOnInit() {
}

onAddCercle() {
   const cercleWrk = new Cercle(new Point(10, 20), 100);
   this.srvPlan.instancePlan.addFG(cercleWrk);
   /// this.srvPlan.instancePlan.display(); ///  Refresh
   this.srvPlan.notificationRefresh.next(true);
}
onAddRectangle() {
   const rectangleWrk = new Rectangle(new Point(30, 40), 200, 300);
   this.srvPlan.instancePlan.addFG(rectangleWrk);
   /// this.srvPlan.instancePlan.display(); /// Refresh
   this.srvPlan.notificationRefresh.next(true);
}
}
