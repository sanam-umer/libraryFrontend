import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BookserviceService } from '../bookservice.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddBookComponent implements OnInit {
  title:String = "Add Book";

  constructor(private bookService: BookserviceService, private router:Router, private _auth: AuthService) { }
  bookItem ={
    bookId :'',
    title :'',
    author :'',
    genre :'',
    image :''

  }

  ngOnInit(): void {
  }

 
  AddBook()
  {    
    this.bookService.newBook(this.bookItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }
}
