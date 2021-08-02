import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _registerUrl = "http://localhost:3000/signup";
  private _loginUrl = "http://localhost:3000/login";
 
  constructor(private http:HttpClient) { }
 
 
  //SIGNUP AND LOGIN 
  registerUser(user){
    return this.http.post(this._registerUrl , user)
  }
  loginUser(user){
    return this.http.post(this._loginUrl , user)
  }
  
  newUser(item){
    return this.http.post("http://localhost:3000/signup", {"user":item})
      .subscribe(data => {console.log(data)})
  }
  getUser(email:any){
    return this.http.get("http://localhost:3000/users/"+email);
  }
  checkUser(email:any){
    return this.http.get("http://localhost:3000/users/"+email);
  }
}

  