import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    Action
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

// Here comes the name of the states
// Individual state that need to be stored in local storage
const KEYS_TO_PERSIST = ['', ''];

// Defining app state
export interface State {
    // Reducer states here
};

export const reducers: ActionReducerMap<State> = {
    // our reducers here
};


// To SYnc up with localstorage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: KEYS_TO_PERSIST,
        rehydrate: true
    })(reducer);
}

// Meta reducers
export const metaReducers: Array<MetaReducer<State, Action>> = [
    localStorageSyncReducer
];
