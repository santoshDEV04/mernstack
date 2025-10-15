export function add(a, b, ...args) {
    let sum = a + b;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;