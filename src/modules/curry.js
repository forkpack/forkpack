export function curry(fn, seed) {
    const reduceValue = (args, seedValue) =>
        args.reduce((acc, a) => {
            return fn.call(fn, acc, a);
        }, seedValue);
    const next = (...args) => {
        return (...x) => {
            if (!x.length) {
                return reduceValue(args, seed);
            }
            return next(...args, reduceValue(x, seed));
        };
    };
    return next();
};