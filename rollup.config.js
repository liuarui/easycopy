import pkg from './package.json'
import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} ${pkg.author}
  */`

export default [
    {
        input: 'main.ts',
        output: [
            {
                format: 'es',
                file: pkg.module,
                banner,
            },
        ],
        plugins: [
            typescript({
                exclude: 'node_modules/**',
                typescript: require('typescript'),
            }),
            terser(),
        ],
    },
    {
        input: 'main.ts',
        output: [
            {
                format: 'es',
                file: pkg.types,
            },
        ],
        plugins: [
            typescript({
                exclude: 'node_modules/**',
                typescript: require('typescript'),
            }),
            dts(),
        ],
    },
]
