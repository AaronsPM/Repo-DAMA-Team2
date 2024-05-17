import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { APIServiceService } from '../../data/apiservice.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  randomPokemon: any = null;
  offset: number = 0;
  limit: number = 40;
  totalPokemons: number = 0; 

  constructor(private apiservice: APIServiceService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.apiservice.GetPokemons(this.offset, this.limit)
      .subscribe((response: any) => {
        this.pokemons = [];
        this.totalPokemons = response.count; 
        (response.results as { name: string }[]).forEach(result => {
          this.apiservice.GetMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

  loadRandomPokemon(): void {
    const randomId = Math.floor(Math.random() * 898) + 1; // Asumiendo que hay 898 Pokémon
    this.apiservice.GetPokemonById(randomId).subscribe({
      next: (data) => {
        this.randomPokemon = data;
        console.log(this.randomPokemon);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Random Pokemon load completed');
      }
    });
  }

  nextPage(): void {
    if (this.offset + this.limit < this.totalPokemons) {
      this.offset += this.limit;
      this.loadPokemons();
    }
  }

  prevPage(): void {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }
}
