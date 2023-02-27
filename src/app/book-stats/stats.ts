import { NumberValueAccessor } from "@angular/forms"

 export interface amountbygenres {
    genre: string,
    count: number
 }

 /*
  {
    "genre": "Comedy",
    "count": 1
  }
 */


  export interface rating {
    title: string,
    rating: number,
    marksAmount : number
 }


/*
  {
    "title": "Boris Godunov",
    "rating": 4,
    "marksAmount": 3
  }
  */