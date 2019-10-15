import { makeMessages } from '@/utils/locales';

export default {
    'exchange': 'Обмен {from} на {to}',
    ...makeMessages('currency', {
        ...makeMessages('label', {
            'rub': '₽',
            'rur': '₽',
            'pzm': 'Prizm',
            'our': 'Ouroboros',
            'ouro': 'Ouroboros',
        })
    }),
    ...makeMessages('form', {
    })
}
