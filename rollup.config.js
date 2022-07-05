import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';
import svg from 'rollup-plugin-svg';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.mdx'];
const projectRootDir = path.resolve(__dirname);
const plugins = [
    svg(),
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, babelHelpers: 'bundled' }),
    alias({
        entries: [
            { find: '@components', replacement: `${projectRootDir}/src/components` },
            { find: '@primitives', replacement: `${projectRootDir}/src/primitives` },
            { find: '@types', replacement: `${projectRootDir}/src/types` },
            { find: '@hooks', replacement: `${projectRootDir}/src/hooks` },
            { find: '@utils', replacement: `${projectRootDir}/src/utils` },
        ],
    }),
];

export default [
    {
        input: 'src/index.ts',
        external: ['react', 'react-dom'],
        plugins,
        output: {
            dir: 'lib-esm',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            name: '@cred/neopop-web',
        },
    },
    {
        input: 'src/index.ts',
        external: ['react', 'react-dom'],
        plugins,
        output: {
            exports: 'named',
            dir: 'lib',
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            name: '@cred/neopop-web',
        },
    },
];
