import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user={uname:'',
  password:''}

  constructor(private _auth: AuthService,
    private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/books'])
      },
      err => {
        console.log(err);
        this._router.navigate(['/login'])
        alert('Login Failed');
        alert('Use admin as username and 1234 as password!')
      }
    ) 
  }

}