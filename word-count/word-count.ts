export default class Words {
    result: any = {};
    word:string;
    str: string[];
    wordCount:number = 1;
    constructor () {}

    public count(phrase: string): any {
        this.str = phrase.split(" ");
        for (let i = 0; i < this.str.length; ++i) {
            this.word = this.str[i];
           if(this.word === this.str[i+1]) {
            this.wordCount++;
           }
        }
    }
}