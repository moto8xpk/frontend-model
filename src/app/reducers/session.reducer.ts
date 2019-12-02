import { SessionActions, SessionActionTypes } from './../actions/session.action';

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as fromRoot from './../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface SessionState extends EntityState<string> {
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    sessions: SessionState;
}

export const defaultSession: SessionState = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    error: ""
}

export const sessionAdapter: EntityAdapter<string> = createEntityAdapter<string>();

export const initialState = sessionAdapter.getInitialState(defaultSession);

export function reducer(
    state: SessionState = initialState,
    action: SessionActions
): SessionState {
    switch (action.type) {
        case SessionActionTypes.LoadSessionSuccess:
            return sessionAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        case SessionActionTypes.LoadSessionFail:
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        default:
            return state
    }
}
const getSessionFeatureState = createFeatureSelector<SessionState>(
    "sessions"
);

export const getSessions = createSelector(
    getSessionFeatureState,
    sessionAdapter.getSelectors().selectAll
);