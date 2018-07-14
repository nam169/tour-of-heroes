import { Component, OnInit } from '@angular/core';
import { HeroService } from '../Servies/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hello = 'hello';
  heroes:Hero[];
  constructor(private heroService:HeroService) { 
    heroes:Hero;
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(0,5));
  }

  ngOnInit() {

  }

}
