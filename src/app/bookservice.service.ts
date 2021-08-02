import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  item={
    
    title:'',
    author:'',
    genre:'',
    image:''
  }
  constructor(private http:HttpClient) { }
  
 server_address:string='/api'

  getBook(id:any){
    return this.http.get("http://localhost:3000/book/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(item){
    return this.http.post("http://localhost:3000/addbook",{"book":item})
      .subscribe(data => {console.log(data)})
  }
  deleteBook(id:any){
    return this.http.delete("http://localhost:3000/deletebook/"+id);
  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update-book",book)
    .subscribe(data =>{console.log(data)})
  }
}