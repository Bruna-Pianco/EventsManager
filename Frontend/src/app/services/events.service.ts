import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../app/models/login.interface';
import { ResponseI } from '../../app/models/response.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private _http: HttpClient) { }
  
  createevent(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/api/events',data)
  }
  
  getEventsAll():Observable<any>{
    return this._http.get('http://localhost:3000/api/eventsget')
  }
  
}
