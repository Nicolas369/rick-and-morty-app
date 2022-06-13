import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, withLatestFrom } from 'rxjs';
import { EpisodeList } from '../models/episode.model';
import { selectEpisodesPage } from '../state/selectos/pages.selector';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  pages: EpisodeList[] = [];

  constructor(
    private http: HttpClient, 
    private store: Store
  ) { 
    this.store.select(selectEpisodesPage).subscribe(
      pages => this.pages = pages
    )
  }

  getEpisodes() {
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }

  getEpisodesPerPage(url: string) {
    const pageNumber = parseInt(url.split('=')[1]);

    if (this.pages.length >= pageNumber) {
      let newPage: EpisodeList;

      newPage = this.pages[pageNumber - 1];
  
      return of(newPage).pipe( withLatestFrom( of({ inStore: true }) ) );
    }

    return this.http.get(url).pipe( withLatestFrom( of({ inStore: false }) ) );
  }

}
