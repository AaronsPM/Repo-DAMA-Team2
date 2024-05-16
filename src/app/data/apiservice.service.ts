import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Pokemon } from '../common/pokemon';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  GetPokemons(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching Pokemons:', error);
          return of({ results: [] });
        })
      );
  }

  GetMoreData(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching data for Pokemon ${name}:`, error);
          return of({});
        })
      );
  }
  
  GetPage(pageUrl: string): Observable<any> {
    return this.http.get(pageUrl)
      .pipe(
        catchError(error => {
          console.error(`Error fetching data from ${pageUrl}:`, error);
          return of({});
        })
      );
  }
}
