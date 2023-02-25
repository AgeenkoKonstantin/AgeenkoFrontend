
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ibook } from "./book";

@Injectable()
export class BookService{

    constructor(private http: HttpClient){}

    getBooks(): Observable<Ibook[]>
    {
        return this.http.get<Ibook[]>("https://localhost:7165/Book/all");
    }
}