import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';

export enum SessionActionTypes {
    LoadSession = '[App] Load data',
    LoadSessionSuccess = '[App] Load data Success',
    LoadSessionFail = '[App] Load data fail'
}

export class LoadSession implements Action {
    readonly type = SessionActionTypes.LoadSession;

    constructor(public payload: number) { }
}

export class LoadSessionSuccess implements Action {
    readonly type = SessionActionTypes.LoadSessionSuccess;

    constructor(public payload: string[]) { }
}

export class LoadSessionFail implements Action {
    readonly type = SessionActionTypes.LoadSessionFail;

    constructor(public payload: string) { }
}

export type SessionActions = LoadSession | LoadSessionSuccess | LoadSessionFail;