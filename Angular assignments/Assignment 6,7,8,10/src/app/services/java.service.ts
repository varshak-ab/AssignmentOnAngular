import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class javaService {

  baseUrl:any='assets/json/java.json'



  constructor(private http:HttpClient) { }

  getCoursesInfo():Observable<any>{

    return this.http.get(this.baseUrl)

}

}