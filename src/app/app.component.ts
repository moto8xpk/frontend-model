import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { DeepLearningApiService } from "./deep-learning-api.service";

import * as fromSession from "./reducers/session.reducer";
import * as sessionActions from "./actions/session.action";
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessions$: any;
  sessionId: string = '';

  constructor(
    private deepApi: DeepLearningApiService,
    private store: Store<fromSession.AppState>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new sessionActions.LoadSessionSuccess());
    this.deepApi.getSessionList().subscribe(data => {
      this.sessions$ = data;
      console.log(this.sessions$);
    }, err => {
      console.log(err)
    })
  }
  submitCreate(): void {
    this.deepApi.createSession(this.sessionId).subscribe(data => {
      console.log(data);
    });
  }

}
