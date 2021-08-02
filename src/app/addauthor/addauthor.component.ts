import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:String = "Add Author";
  constructor(private authorService: AuthorService, private router:Router, private _auth: AuthService) { }
  authorItem = {
    authorId:'',
    name:'',
    works:'',
    genre:'',
    image : ''
  }
  ngOnInit(): void {
  }

 
AddAuthor()
{    
  this.authorService.newAuthor(this.authorItem);
  console.log("Called");    
  alert("Success");
  this.router.navigate(['/authors']);
}
}
