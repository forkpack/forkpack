export function sum(a, b) {
    if (arguments[1][0]) {
        return arguments[1].reduce(function (total, current) {
            return total + current;
        }, 0);
    };
    return a + b
}