import { Component, OnInit } from '@angular/core';
import { HEROES } from './hero-mock';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes = HEROES; 
  console.log(heroes);
  selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  constructor() {

   }

  ngOnInit() {
   
  }

}
