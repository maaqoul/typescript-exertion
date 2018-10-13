 const gigaSecond = 10**12;
 export default class Gigasecond  {
    constructor (public currentDate: Date) {}
    
    public date = (): Date => new Date(this.currentDate.getTime() + gigaSecond);
}