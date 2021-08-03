import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';  


  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String="Library";
  constructor(public _auth:AuthService,
    private _router:Router){}

    logoutUser()
    {
    localStorage.removeItem('token')
    this._router.navigate(['/books'])
    }
    loggedUsera()
    {
      this._router.navigate(['/addbook'],)
    }
    loggedUserb()
    {
      this._router.navigate(['/addauthor'],)
    }
    }