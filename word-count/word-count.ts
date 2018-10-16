export default class Words {
    public count(phrase: string): any {
        let result = new Map();
        let str: string[];
        let wordCount:number = 0;
        str = phrase.trim().toLowerCase().split(/\s+/);
        for (let currentWord of str) {
            wordCount = str.filter((word: string) => word === currentWord).length;
            result.set(currentWord, wordCount)
        }
        return result;
    }
}