import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../common/pokemon';
@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
  private urlApi ='https://pokeapi.co/api/v2/pokemon/ditto'
  private urlApiBase =''
  constructor(private http:HttpClient) { }

  public GetPokemons(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.urlApi)
  }
}
