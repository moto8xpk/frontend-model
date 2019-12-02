import * as sessionActions from './../actions/session.action';
import { DeepLearningApiService } from './../deep-learning-api.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

@Injectable()
export class SeesionEffect {
    constructor(
        private actions$: Actions,
        private deepApi: DeepLearningApiService
    ) { }

    @Effect()
    loadSessions$: Observable<Action> = this.actions$.pipe(
        ofType<sessionActions.LoadSession>(
            sessionActions.SessionActionTypes.LoadSession
        ),
        mergeMap((action: sessionActions.LoadSession) =>
            this.deepApi.getSessionList().pipe(
                map(
                    (sessions: string[]) =>
                        new sessionActions.LoadSessionSuccess(sessions)
                ),
                catchError(err => of(new sessionActions.LoadSessionFail(err)))
            )
        )
    );
    
}

