import { formatMessage } from 'umi-plugin-locale';


export const renderMessage = (s: string) => formatMessage({ id: s })

export interface Dict {
    [key: string]: string
}

export const makeMessages = (
    prefix: string,
    dict: Dict
) => Object.keys(dict).reduce((acc: Dict, k) => {
    let newAccum = Object.assign({}, { ...acc })
    newAccum[`${prefix}.${k}`] = dict[k]
    return newAccum
}, {})
