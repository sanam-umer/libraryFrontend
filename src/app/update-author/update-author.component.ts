import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  title:String = "Edit Author";
  constructor(private authorService: AuthorService, private router:Router) { }
  authorItem = {
    
    name:'',
    works:'',
    genre:'',
    image:''
  }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

  editAuthor(){    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }
}