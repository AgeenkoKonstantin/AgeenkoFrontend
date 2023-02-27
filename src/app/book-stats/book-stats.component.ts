import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { amountbygenres, rating } from './stats';


@Component({
  selector: 'app-book-stats',
  templateUrl: './book-stats.component.html',
  styleUrls: ['./book-stats.component.css']
})
export class BookStatsComponent implements OnInit {
  amount: Array<amountbygenres>;
  rating: Array<rating>;
  constructor(private serv: BookService) {
    this.amount = new Array<amountbygenres>();
    this.rating = new Array<rating>();
  }

  ngOnInit() {
    this.loadStats();
}

private loadStats() {
  this.serv.getamountbygenres().subscribe((data: Array<amountbygenres>) => {
          this.amount = data; 
      });
  this.serv.getrating().subscribe((data: Array<rating>) => {
        this.rating = data; 
      });    
}

}
