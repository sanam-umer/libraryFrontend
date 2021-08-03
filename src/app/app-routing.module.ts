import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddBookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {AuthGuard} from './auth.guard';
import { UpdateAuthorComponent } from './update-author/update-author.component';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
 
  {path:'authors',component:AuthorsComponent},
  {path:'books',component:BooksComponent},
  {path:'addauthor',
  canActivate:[AuthGuard],
  component: AddauthorComponent},
  {path:'addbook',
  canActivate:[AuthGuard],
  component:AddBookComponent},
  {path:'update-book',
  
   component:UpdateBookComponent
  },
  {path:'update-author',
  
   component:UpdateAuthorComponent
  }

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }