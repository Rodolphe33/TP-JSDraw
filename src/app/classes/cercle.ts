import { FG } from './fg';
import { Point } from './point';

export class Cercle extends FG {

   public static from(objLoad: any): FG {
      const ptr: Point = new Point(objLoad.innerAncrage.innerX, objLoad.innerAncrage.innerY);
      return new Cercle(ptr, objLoad.innerRayon);
   }

   constructor(point: Point, private innerRayon: number, ) {
      super(point, 'Cercle'); ///   Appel du constructor classe mére
   }
   public get rayon(): number {
      return this.innerRayon;
   }
   public set rayon(r: number) {
      this.innerRayon = r;
   }

   public dessine(context: CanvasRenderingContext2D): void {
      console.log(`Cercle X: ${this.ancrage.x} Y: ${this.ancrage.y} R: ${this.innerRayon}`);
      context.beginPath();
      context.arc(this.ancrage.x, this.ancrage.y, this.innerRayon, 0, 2 * Math.PI);
      // tslint:disable-next-line:no-unused-expression
      context.stroke();
   }


}
