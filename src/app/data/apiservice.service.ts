import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../common/pokemon';
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  
  constructor(private http:HttpClient) { }
  urlApi: string ='https://pokeapi.co/api/v2/pokemon/ditto'

  GetPokemons(): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.urlApi).pipe(
      catchError( (error) => {
        console.log(error)
        return of(undefined)
      })
    )
  }
}
