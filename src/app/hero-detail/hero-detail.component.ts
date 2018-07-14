import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../heroes/hero';
import { HeroService } from '../Servies/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input() hero: Hero;

  hero:Hero;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

  goBack(){
    this.location.back();
  }
}