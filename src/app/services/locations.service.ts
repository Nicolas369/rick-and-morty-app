import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of, withLatestFrom } from 'rxjs';
import { LocationList } from '../models/location.model';
import { selectLocationsPage } from '../state/selectos/pages.selector';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  pages: LocationList[] = [];

  constructor(
    private http: HttpClient,
    private store: Store
  ) { 
    this.store.select(selectLocationsPage).subscribe(
      pages => this.pages = pages
    )
  }

  getLocation() {
    return this.http.get('https://rickandmortyapi.com/api/location');
  }

  getLocationPerPage(url: string) {
    const pageNumber = parseInt(url.split('=')[1]);

    if (this.pages.length >= pageNumber) {
      let newPage: LocationList;

      newPage = this.pages[pageNumber - 1];
  
      return of(newPage).pipe( withLatestFrom( of({ inStore: true }) ) )
    }

    return this.http.get(url).pipe( withLatestFrom( of({ inStore: false }) ) )
  }
  
}
