import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }


  public login(info: { login: string, password: string }):Observable<number> { 
    
    return this._http.post<any>("/api/Auth/token", info, {observe: 'response'})
            .pipe(
              map(res=> 
              {
                if (res.status == 200)
                  localStorage.setItem("token", res.body.token);   
                  console.log(res.body.token)
                             
                return res.status;
              }),
              catchError(error => {
                return of((error as HttpResponse<any>).status);
              }
              )
            )
  }
}
