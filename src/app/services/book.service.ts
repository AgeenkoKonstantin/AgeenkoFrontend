
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ibook } from "../book/book";

@Injectable({
    providedIn: 'root'
  })
export class BookService{

    constructor(private http: HttpClient){}

    public getBooks(): Observable<Ibook[]>
    {
        return this.http.get<Ibook[]>("/Book/all");
    }
}

