import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddBookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookserviceService } from './bookservice.service';
import { AuthorService } from './author.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    AddBookComponent,
    AddauthorComponent,
    UpdateAuthorComponent,
    UpdateBookComponent,
    SignupComponent,
    IndexComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [   AuthService,
    BookserviceService,
    AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
