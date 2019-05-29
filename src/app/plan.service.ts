import { Injectable } from '@angular/core';
import { Plan } from './classes/plan';
import { BehaviorSubject } from 'rxjs';
import { Rectangle } from './classes/rectangle';

@Injectable({
   providedIn: 'root'
})
export class PlanService {

   instancePlan: Plan = new Plan();

   listeDesDessins: string[] = [];

   notificationRefresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

   constructor() {
      this.refreshListeDesDessins();
   }

   refreshListeDesDessins() {
      if ('catalogue' in localStorage) {
         this.listeDesDessins = []; /// tableau vide
         /// chargement en memoire du catalogue
         const tab = JSON.parse(localStorage['catalogue']);
         // tslint:disable-next-line:forin
         for (const key in tab) {
            this.listeDesDessins.push(key); /// mise en place dans le tableau
         }
      }
   }
   public saveDessin2LocalStorage() {
      const str: string = this.instancePlan.save(); ///   Récupération du flux JSON
      ///   Sauvegarde du flux JSON dans le local storage
      localStorage[this.instancePlan.name] = str;
      ///   localStorage.dessin =str;
      ///   Mise à jour du catalogue de dessin
      if (!('catalogue' in localStorage)) {
         ///   Création d'un tableau dans le localStorage
         localStorage['catalogue'] = JSON.stringify([]);
      }
      /// const catalogue: string = JSON.parse(localStorage['catalogue']);
      const catalogue: any = JSON.parse(localStorage.catalogue);   /// Ecris équivalent

      if (!(this.instancePlan.name in catalogue)) {
         catalogue[this.instancePlan.name] = { date: new Date() };
      } else {
         catalogue[this.instancePlan.name].data = new Date(); ///  Date d'update du dessin
      }
      localStorage['catalogue'] = JSON.stringify(catalogue); ///  Sauvegarde du catalogue
      this.refreshListeDesDessins();
   }

   public loadDessinFromLocalstorage() {
      ///   Test si dessin present dans le storage
      if ('dessin' in localStorage) {
         const strRead: string = localStorage[this.instancePlan.name];
         let objTemp: any;
         try {
            objTemp = JSON.parse(strRead);
            this.instancePlan.load(objTemp);
            /// notification refresh
            this.notificationRefresh.next(true);
         } catch (ex) {
            console.error(ex);
            return;
         }
      }
   }

   public clearDessin() {
      ///  Appel plan
      this.instancePlan.clear();
      this.notificationRefresh.next(true);
   }

}

