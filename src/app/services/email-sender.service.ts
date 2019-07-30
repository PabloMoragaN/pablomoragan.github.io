import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor(public _http: HttpClient) { }


  sendEmail(email): Observable<any> {
    let json = JSON.stringify(email);

    // let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/send-email', json, { headers: headers });

  }

}
