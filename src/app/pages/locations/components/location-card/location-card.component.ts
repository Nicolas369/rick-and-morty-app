import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCharactersByUrlList } from 'src/app/state/actions/characters.action';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {
  @Input() location: any;
  
  constructor( private store: Store ) { }

  redirectToCharacters() {
    const urlList = { urlList: this.location.residents };
    this.store.dispatch(loadCharactersByUrlList(urlList))
  }
}
