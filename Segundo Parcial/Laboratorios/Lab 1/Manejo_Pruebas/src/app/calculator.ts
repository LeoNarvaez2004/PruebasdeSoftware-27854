export class Calculator {
    multiply(x: number, y: number) {
        return x * y;
    }

    divide(x: number, y: number) {
        if (y === 0) {
            return null;
        }

        return x / y;
    }
}
