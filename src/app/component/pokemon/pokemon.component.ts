import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { APIServiceService } from '../../data/apiservice.service';
import { Pokemon } from '../../common/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private apiservice: APIServiceService) {}

  ngOnInit(): void {
    this.apiservice.GetPokemons()
      .subscribe((response: any) => {
        (response.results as { name: string }[]).forEach(result => {
          this.apiservice.GetMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }
  
  
}
