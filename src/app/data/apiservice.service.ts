import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../common/pokemon';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  GetPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
      .pipe(
        catchError(error => {
          console.error('Error fetching Pokemons:', error);
          return of({ results: [] });
        })
      );
  }

  GetMoreData(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching data for Pokemon ${name}:`, error);
          return of({});
        })
      );
  }
}
