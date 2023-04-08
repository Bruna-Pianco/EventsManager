import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public _http: HttpClient) { }
  createevent(data:any){
    return this._http.post('http://localhost:3000/api/events',data)
  }
  
}
