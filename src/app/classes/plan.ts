import { FG } from './fg';

export class Plan {
   private tabFG: FG[] = [];

   public addFG(fg: FG): void {
      this.tabFG.push(fg);
   }

   public display(context: CanvasRenderingContext2D): void {
      for (const fgTemp of this.tabFG) {
         fgTemp.dessine(context);
      }
   }
}
