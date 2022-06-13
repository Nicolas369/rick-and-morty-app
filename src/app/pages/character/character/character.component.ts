import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { selectCharactersList } from 'src/app/state/selectos/characters.selector';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  character:any;
  listOfCharacters$: Observable<Character[]>;


  constructor(
    private route: ActivatedRoute,
    private store: Store  
  ) { 
    this.listOfCharacters$ = this.store.select(selectCharactersList);
    this.listOfCharacters$.subscribe( list => {
      this.character = this.findCharacter(list);
    });
  }

  getId() {
    return parseInt(this.route.snapshot.paramMap.get('id') || '1' );
  }

  findCharacter(charactersList: Character[]): Character | undefined {
    const characterId = this.getId();
    const character = charactersList.find( character => character.id === characterId);
    return character;
  }

  extractEpisodeNumber(url: string) {
    const urlDivided = url.split('/')
    return urlDivided.pop();
  }

}
