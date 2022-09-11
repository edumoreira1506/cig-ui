import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    name: '@cig-platform/ui',
    extend: true,
  },
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: /node_modules\/(?!(react-family-tree)\/)/i,
      babelHelpers: 'bundled',
    }),
    url({
      limit: 100 * 1024,
    }),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
};
