import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioBackService {

  constructor(private http:HttpClient) {}

  URL:String="http://localhost:8080/autobuses";

  getAutobuses():Observable<any>{
    return this.http.get(this.URL+'/bus');
  }

  getAutobus(matricula:string):Observable<any>{
    return this.http.get(this.URL+matricula);
  }
}
