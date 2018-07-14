import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/hero-mock';
import { Observable, of, Observer } from 'rxjs';
import { MessageService } from '../message.service';
import{ HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/mans';

  getHero(id:number):Observable<Hero>{
    return of(HEROES.find(hero=>hero.id===id));
  }
  // getHeroes():Observable<Hero[]>{
  //   this.messageService.add('Heroes Service, fetched heroes');
  //   return of(HEROES);
  // }

  getHeroesApi():Observable<Hero[]>{

    let heroes:Observable<Hero[]>;
    heroes = this.httpClient.get<Hero[]> (this.heroesUrl);
    return heroes;
  }

  
  constructor(private httpClient:HttpClient,private messageService:MessageService) {
    

   }
   private log(message:string)
  {
    this.messageService.add('HeroService: ' + message);
  }
}
