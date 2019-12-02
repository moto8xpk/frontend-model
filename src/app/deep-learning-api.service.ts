import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeepLearningApiService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  createSession(sessionId:string) {
    let object = {
      "session-id": sessionId
    }
    return this.http.post(`${this.baseUrl}` + `/session/create`, object)
  }

  getSessionList(){
    return this.http.get(`${this.baseUrl}`+`/session/get`);
  }

}
