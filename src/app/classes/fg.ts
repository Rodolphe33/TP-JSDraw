import { Point } from './point';

export abstract class FG {

   constructor(protected innerAncrage: Point, protected typeName: string) { }

   public abstract dessine(context: CanvasRenderingContext2D): void;

   public get ancrage(): Point {
      return this.innerAncrage;
   }
}


