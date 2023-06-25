export function multiply(a, b) {
    if (arguments[1][0]) {
        return arguments[1].reduce(function (total, current) {
            return total * current;
        }, 1);
    };
    return a * b
}