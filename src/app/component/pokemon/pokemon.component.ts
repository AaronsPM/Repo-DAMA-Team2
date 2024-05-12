import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../../data/apiservice.service';
import { Pokemon } from '../../common/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  bdataPokemons? : Pokemon
  constructor(private apiservice: APIServiceService){}
  ngOnInit(): void {
    this.loadPokemons();
  }
  loadPokemons(){
    this.apiservice.GetPokemons().subscribe(
      {
      next: (data) => {
        this.bdataPokemons = data
        console.log(data)
    },
    error: err => {
      console.log(err)
    },
    complete: () => {
      console.log('completed')
    }
  }
  )    
  }

}
