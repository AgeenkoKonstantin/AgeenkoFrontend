import { routingComponents } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { BookService } from "../services/book.service"
import { Ibook } from './book';
import { Router} from '@angular/router';
import {TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 //типы шаблонов
 @ViewChild('readOnlyTemplate', {static: false})
  readOnlyTemplate: TemplateRef<any> | undefined;
 @ViewChild('editTemplate', {static: false})
  editTemplate: TemplateRef<any> | undefined;
     
 editedBook: Ibook|null = null;
 books: Array<Ibook>;
 isNewRecord: boolean = false;
 statusMessage: string = "";
     
 constructor(private serv: BookService,) {
     this.books = new Array<Ibook>();
 }
     
 ngOnInit() {
     this.loadBooks();
 }
     
 //загрузка 
 private loadBooks() {
     this.serv.getBooks().subscribe((data: Array<Ibook>) => {
             this.books = data; 
         });
 }
 // добавление 
 addBook() {
     this.editedBook = new Ibook("1","","","",0,0);
     this.books.push(this.editedBook);
     this.isNewRecord = true;
 }
  
 // редактирование 
 editBook(book: Ibook) {
     this.editedBook = new Ibook(book.id, book.title, book.author,book.genre, book.price, book.amount,);
 }
 // загружаем один из двух шаблонов
 loadTemplate(book: Ibook) {
     if (this.editedBook && this.editedBook.id === book.id) {
         return this.editTemplate;
     } else {
         return this.readOnlyTemplate;
     }
 }
 // сохраняем 
 saveBook() {
     if (this.isNewRecord) {
         // добавляем 
         this.serv.createBook(this.editedBook as Ibook).subscribe(_ => {
             this.statusMessage = 'Данные успешно добавлены',
             this.loadBooks();
         });
         this.isNewRecord = false;
         this.editedBook = null;
     } else {
         // изменяем 
         this.serv.updateBook(this.editedBook as Ibook).subscribe(_ => {
             this.statusMessage = 'Данные успешно обновлены',
             this.loadBooks();
         });
         this.editedBook = null;
     }
 }
 // отмена редактирования
 cancel() {
     // если отмена при добавлении, удаляем последнюю запись
     if (this.isNewRecord) {
         this.books.pop();
         this.isNewRecord = false;
     }
     this.editedBook = null;
 }
 // удаление 
 deleteBook(book: Ibook) {
     this.serv.deleteBook(book.id).subscribe(_ => {
         this.statusMessage = 'Данные успешно удалены',
         this.loadBooks();
     });
 }

}
