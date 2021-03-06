import { FG } from './fg';
import { Point } from './point';

export class Rectangle extends FG {

   public static from(objLoad: any): FG {
      const ptr: Point = new Point(objLoad.innerAncrage.innerX, objLoad.innerAncrage.innerY);
      return new Rectangle(ptr, objLoad.innerHauteur, objLoad.innerLargeur);
   }

   constructor(point: Point, private innerHauteur: number, private innerLargeur: number) {
      super(point, 'Rectangle');
   }

   public get hauteur(): number {
      return this.innerHauteur;
   }
   public set hauteur(r: number) {
      this.innerHauteur = r;
   }
   public get largeur(): number {
      return this.innerHauteur;
   }
   public set largeur(r: number) {
      this.innerLargeur = r;
   }
   public dessine(context: CanvasRenderingContext2D): void {
      console.log(`Rectangle X : ${this.ancrage.x} Y : ${this.ancrage.y} H: ${this.innerHauteur} L : ${this.innerLargeur}`);
      context.fillRect(this.ancrage.x, this.ancrage.y, this.hauteur, this.largeur);
   }

}
