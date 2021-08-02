import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  title:String = "Edit Book";
  constructor(private bookService: BookserviceService, private router:Router) { }
  bookItem = {
    bookid:'',
    title:'',
    author:'',
    genre:'',
    image:''
  }

  

  ngOnInit(): void {
    let bookid = localStorage.getItem("editBookId");
    this.bookService.getBook(bookid).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

  editBook(){    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }
}