import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import {  ActivatedRoute,Router} from "@angular/router";
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
 pageTitle:string='Authors';
 imageWidth:number=100;
 imageMargin:number=6;
 showImage:boolean=false;

 authors=[{
  
  name:'',
  works:'',
  genre:'',
  image:''
 }]
 
 toggleImage(): void{
  this.showImage = !this.showImage;
}
  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  }) 
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['update-author']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a !== author);
      })
    }
  
}