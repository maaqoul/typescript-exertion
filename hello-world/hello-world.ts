class HelloWorld {
    static hello(parameter?: string) {
        if (parameter) {
            return `Hello, ${parameter}!`;
        }
        return 'Hello, World!';
    }
}

export default HelloWorld