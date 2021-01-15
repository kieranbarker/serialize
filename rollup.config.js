import { terser } from 'rollup-plugin-terser';
import { version, author, license, repository } from './package.json';

const banner = `/*! Serialize v${version} | (c) ${new Date().getFullYear()} ${author.name} | ${license} License | ${repository.url} */`;

export default [
  {
    input: './src/iife.js',
    output: [
      {
        banner: banner,
        file: './dist/serialize.js',
        format: 'iife',
        name: 'Serialize',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.min.js',
        format: 'iife',
        plugins: [terser()],
        name: 'Serialize',
        preferConst: true
      }
    ]
  },
  {
    input: './src/module.js',
    output: [
      {
        banner: banner,
        file: './dist/serialize.cjs.js',
        format: 'cjs',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.cjs.min.js',
        format: 'cjs',
        plugins: [terser()],
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.es.js',
        format: 'es',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.es.min.js',
        format: 'es',
        plugins: [terser()],
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.amd.js',
        format: 'amd',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/serialize.amd.min.js',
        format: 'amd',
        plugins: [terser()],
        preferConst: true
      }
    ]
  }
];