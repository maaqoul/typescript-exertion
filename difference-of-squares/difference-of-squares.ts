export default class Squares {
    squareOfSum:number;
    sumOfSquares:number;
    difference:number;
    constructor (public number: number) {
        this.SquareOfSum();
        this.SumOfSquares();
        this.Difference();
    }
    public SquareOfSum = (): number => {
        let sum:number = 0;
      for (let i = 1; i <= this.number; ++i) {
        sum += i;
      }
      return this.squareOfSum = sum**2;
    }; 
    public SumOfSquares = (): number => { 
        let squares:number = 0;
        for (let i = 1; i <= this.number; ++i) {
            squares += i**2;
        }
        return this.sumOfSquares = squares;
    };

    public Difference = ():number =>  this.difference = this.SquareOfSum() - this.SumOfSquares();
}