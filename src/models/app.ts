import { AnyAction } from 'redux';
import { EffectsCommandMap, SubscriptionAPI } from 'dva/index';
import { fetchAppConfig } from '@/services/app';
import produce from 'immer';


export interface AppAuth {
    guest: boolean,
    id?: string,
    ident?: string,
}

export interface AppConfig {
    auth: AppAuth,
    app: {
        version: string
    }
}

export interface AppModel {
    config: AppConfig
}

const initialState: AppModel = {
    config: {
        auth: { guest: true },
        app: { version: '0.0.0' }
    }
}

export default {
    namespace: 'app',
    state: Object.freeze(initialState),
    subscriptions: {
        setup({ dispatch, history }: SubscriptionAPI) {
            history.listen((_) => {
                dispatch({
                    type: 'getAppConfig',
                })
            })
        }
    },
    reducers: {
        'set-config'(state: AppModel, { payload }: AnyAction) {
            return produce(state, draft => {
                draft.config = (payload as AppConfig)
            })
        }
    },
    effects: {
        *'getAppConfig'(_: AnyAction, { call, put }: EffectsCommandMap) {
            const result = yield call(fetchAppConfig)
            yield put({
                type: 'set-config',
                payload: result.data
            })
        }
    }
}
