import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  userUrl:string='https://dummyjson.com/users'
  constructor(private http: HttpClient) { }

 
  // function to view user details

  viewDetails(){
   return this.http.get(`${this.userUrl}`)
  }

  // reload(){
  //   window.location.reload
  // }
// viewUser(){
//   return this.http.get('https://dummyjson.com/users')
// }
  // viewUser(userId:string){
  //   // return this.http.get('https://dummyjson.com/users/'+ userId)
  //   return this.http.get(`${this.userUrl}/${userId}`)
  // }

}