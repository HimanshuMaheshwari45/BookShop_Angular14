import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { BookComponent } from "./book/BookComponent";



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule { }
