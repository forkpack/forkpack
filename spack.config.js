const { config } = require("@swc/core/spack");

module.exports = config({
    entry: {
        web: __dirname + "/dist/forkpack.esm.js",
    },
    output: {
        path: __dirname + "/dist",
        // Name is optional.
        name: "forkpack.umd.js",
    },
    options: {
        "jsc": {
            "parser": {
                "syntax": "ecmascript",
                "jsx": false,
                "dynamicImport": true,
                "privateMethod": false,
                "functionBind": false,
                "exportDefaultFrom": false,
                "exportNamespaceFrom": false,
                "decorators": false,
                "decoratorsBeforeExport": false,
                "topLevelAwait": false,
                "importMeta": false
            },
            "minify": {
                "compress": true,
                "mangle": true
            },
            "target": "es5",
            "loose": false,
            "externalHelpers": false,
            "keepClassNames": false
        },
        "module": {
            "type": "umd",
            "strict": true,
            "strictMode": true,
            "lazy": false,
            "noInterop": true,
            "ignoreDynamic": false
        },
        "env": {
            "mode": "entry"
        },
        "minify": false
    }
});