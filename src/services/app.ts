import request from '@/utils/request';


export async function fetchAppConfig() {
    return request({ url: '/api/app/config' })
}
