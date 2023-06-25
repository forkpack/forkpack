import * as modules from "./modules/index.js"
export * from "./modules/index.js"

export const fp = {
    sum: modules.curry(modules.sum, 0),
    multiply: modules.curry(modules.multiply, 1),
    curry: modules.curry
}

if (typeof (window) !== 'undefined') {
    window.fp = fp
}