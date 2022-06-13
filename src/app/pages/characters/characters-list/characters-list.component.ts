import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { Info } from 'src/app/models/info.model';
import { loadCharacters, loadCharactersNewPage } from 'src/app/state/actions/characters.action';
import { selectCharactersInfo, selectCharactersList } from 'src/app/state/selectos/characters.selector';

@Component({
  selector: 'app-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  info$: Observable<Info> = new Observable<Info>();
  characters$: Observable<Character[]> = new Observable<Character[]>();
  info: Info = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  };

  constructor(
    private store: Store,
    private route: ActivatedRoute  
  ) { }

  ngOnInit(): void {
    this.characters$ = this.store.select(selectCharactersList);
    this.requestCharacters();
  }

  requestCharacters() {
    const pageReload = this.route.snapshot.paramMap.get('new');
    if (pageReload) {
      this.info$ = this.store.select(selectCharactersInfo);
      this.info$.subscribe(info => this.info = info);
      this.store.dispatch(loadCharacters())
    } 
  }

  nextPage() {
    const urlPage =  this.info.next;
    if (urlPage) this.store.dispatch(loadCharactersNewPage({ url: urlPage}));
  }

  prevPage() {
    const urlPage =  this.info.prev;
    if (urlPage) this.store.dispatch(loadCharactersNewPage({ url: urlPage}));
  }
}
