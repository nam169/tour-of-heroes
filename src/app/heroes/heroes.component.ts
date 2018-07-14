import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../Servies/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes:Hero[]; 

  selectedHero:Hero;
 
  constructor(private heroService:HeroService) {
     
  }

  // getHeroes():void{
  //     this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  // }

  getHeroesFromApi():void{
    this.heroService.getHeroesApi().subscribe(heroes=>this.heroes=heroes);
}
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroesFromApi();
  }

}
