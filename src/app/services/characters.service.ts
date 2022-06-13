import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, withLatestFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { Character, CharactersList } from '../models/character.model';
import { selectCharactersPage } from '../state/selectos/pages.selector';
import { CharacterPages } from '../models/pages.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  pages: CharacterPages = [];
  pages$: Observable<CharacterPages>;

  constructor(
    private http: HttpClient,
    private store: Store  
  ) { 
    this.pages$ = this.store.select(selectCharactersPage);
    this.pages$.subscribe( page => this.pages = page );
  }

  getCharacters() {
    return this.http.get<CharactersList>('https://rickandmortyapi.com/api/character')
  }

  getCharactersPerPage(url: string) {
    const pageNumber = parseInt(url.split('=')[1]);

    if (this.pages.length >= pageNumber) {
      let newPage: CharactersList;
      newPage = this.pages[pageNumber - 1];
  
      return of(newPage).pipe( withLatestFrom(
        of({ inStore: true }))
      );
    }

    return this.http.get<CharactersList>(url).pipe(
      withLatestFrom( of({ inStore: false }) )
    );
  }

  
  getCharactersByUrlList(charactersUrls: string[]) {
    let charactersToGet: Observable<Character>[]; 

    charactersToGet = charactersUrls.map(
      (characterUrl: string) => this.http.get<Character>(characterUrl)
    );

    return forkJoin(charactersToGet);
  }
}
