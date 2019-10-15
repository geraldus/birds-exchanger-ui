import { IConfig } from 'umi-types';
import packageJson from './package.json';


const DYN_API_ADDR = 'outb-demo.agolos.ru'
const DEF_API_PORT = '80'

const apiAddr =
    process.env['BACKEND_API'] && process.env['BACKEND_API'] != ''
    ? `http://${process.env['BACKEND_API']}`
    : `http://${DYN_API_ADDR}:${DEF_API_PORT}`

// tslint:disable-next-line: no-console
console.log('Using following back-end API URL: %s.  You can change setting env BACKEND_API var.', apiAddr)
// ref: https://umijs.org/config/
const config: IConfig = {
    treeShaking: true,
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react', {
                antd: true,
                dva: {
                    immer: true,
                },
                dynamicImport: { webpackChunkName: true },
                title: 'birds-exchanger-ui',
                dll: false,
                locale: {
                    enable: true,
                    default: 'ru-RU',
                },
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            }],
    ],
    proxy: {
        '/api': {
            target: apiAddr,
            changeOrigin: true
        }
    },
    chainWebpack(config, { webpack }) {
            config
            .output
            .chunkFilename(`[name].chunk.js?etag=${packageJson.version}`)
    },
}

export default config;
