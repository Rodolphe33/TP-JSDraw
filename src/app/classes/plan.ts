import { FG } from './fg';
import { Rectangle } from './rectangle';
import { Cercle } from './cercle';

export class Plan {

   name: string = 'dessin';

   private tabFG: FG[] = [];

   public addFG(fg: FG): void {
      this.tabFG.push(fg);
   }

   public display(context: CanvasRenderingContext2D): void {
      for (const fgTemp of this.tabFG) {
         fgTemp.dessine(context);
      }
   }

   public save() {
      return JSON.stringify(this.tabFG);
   }

   public load(tab: any) {
      this.tabFG = [];
      for (const obj of tab) {
         if (obj.typeName === 'Cercle') {
            this.tabFG.push(Cercle.from(obj));
            continue;
         }

         if (obj.typeName === 'Rectangle') {
            this.tabFG.push(Rectangle.from(obj));
            continue;
         }
      }
   }

   public clear() {
      this.tabFG = [];
   }
}
