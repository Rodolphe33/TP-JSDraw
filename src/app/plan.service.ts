import { Injectable } from '@angular/core';
import { Plan } from './classes/plan';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class PlanService {

   instancePlan: Plan = new Plan();

   notificationRefresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

   constructor() { }
}
