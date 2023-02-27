
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { amountbygenres, rating } from '../book-stats/stats';
import { Ibook } from "../book/book";

@Injectable({
    providedIn: 'root'
  })
export class BookService{

    constructor(private http: HttpClient){}


    getBooks(){
        return this.http.get<Array<Ibook>>("/Book");
    }
    
    createBook(book: Ibook){
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.post<Ibook>("/Book", JSON.stringify(book), {headers: myHeaders}); 
    }
    updateBook(book: Ibook) {
        const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        return this.http.put<Ibook>("/Book", JSON.stringify(book), {headers:myHeaders});
    }
    deleteBook(id: string){
        console.log(id)
        return this.http.delete<Ibook>("/Book/"+id);
    }

    getamountbygenres(){
        return this.http.get<Array<amountbygenres>>("/amountbygenres");
    }

    getrating(){
        return this.http.get<Array<rating>>("/rating");
    }

}

