import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode.model';
import { Info } from 'src/app/models/info.model';
import { loadCharactersByUrlList } from 'src/app/state/actions/characters.action';
import { loadEpisodes, loadEpisodesNewPages } from 'src/app/state/actions/episodes.action';
import { episodesInfoSelector, episodesSelector } from 'src/app/state/selectos/episodes.selectore';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {
  episodes$: Observable<Episode[]>
  episodes:any = [];
  info: Info = {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  };
  
  constructor(private store: Store) { 
    this.episodes$ = this.store.select(episodesSelector);
    this.store.select(episodesInfoSelector).subscribe(
      info => this.info = info
    )
  }

  ngOnInit(): void {
    this.store.dispatch(loadEpisodes());
  }

  requestListOfCharacters(urlList: string[]) {
    this.store.dispatch(loadCharactersByUrlList({ urlList: urlList}))
  }

  
  nextPage() {
    const urlPage = this.info.next; 
    if (urlPage) this.store.dispatch(loadEpisodesNewPages({ url: urlPage}));
  }

  prevPage() {
    const urlPage = this.info.prev;
    if (urlPage) this.store.dispatch(loadEpisodesNewPages({ url: urlPage}));
  }

}
