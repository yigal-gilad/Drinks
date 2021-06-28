import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from "./consts/url";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getData(s: string): Observable<any> {
    return this.http.get<any>(URL + "getdata/?search=" + s);
  }

  getRandomData(): Observable<any> {
    return this.http.get<any>(URL + "getrandomdata");
  }

}
