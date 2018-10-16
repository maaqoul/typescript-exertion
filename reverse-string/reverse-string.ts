class ReverseString {
    static reverse(string: string): string {
        let reversedString:string = '';
        for (let i = string.length - 1; i >= 0; --i) {
            reversedString += string[i]
        }
        return reversedString;
    }
}

export default ReverseString
