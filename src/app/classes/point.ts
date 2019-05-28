export class Point {

   public get x(): number {
      return this.innerX;
   }

   public set x(v: number) {
      this.innerX = v;
   }

   public get y(): number {
      return this.innerY;
   }
   public set y(v: number) {
      this.innerY = v;
   }
   constructor(private innerX: number, private innerY: number) {

   }
}
