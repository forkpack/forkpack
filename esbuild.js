const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/main.js'],
        outfile: 'dist/forkpack.esm.js',
        bundle: true,
        format: 'esm',
        minify: false,
        target: ['es2016']
    })
    .catch(() => process.exit(1));