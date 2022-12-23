import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userUrl:string='https://dummyjson.com/users'
  constructor(private http: HttpClient) { }

  
  // getDetails():Observable<>{
  //   return this.http.get(this.userUrl)
  //  }
  viewDetails(){
   return this.http.get(`${this.userUrl}`)
  }

  
}
