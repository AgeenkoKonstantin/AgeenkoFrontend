import { routingComponents } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Ibook } from './book';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Ibook[]=[]
  constructor(private _bookservice: BookService) { }
  
  ngOnInit(): void {
    this._bookservice.getBooks().subscribe(data => this.books = data);
  }

}
