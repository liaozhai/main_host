import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import json from '@rollup/plugin-json';

export default {  
    input: 'src/index.js',  
    output: [ 
        {
            file: 'public/index.js',
            format: 'iife',
            sourcemap: 'inline',
            name: 'App',
            globals: {
                vue: 'Vue',
                App: 'App',
            },
        }
    ],
    plugins: [
        resolve(),
        vue(),
        json(),
        commonjs({ extensions: [ '.js', '.msj', '.vue' ] }),
        scss(),
    ],
};