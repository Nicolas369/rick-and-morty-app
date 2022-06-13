import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Info } from 'src/app/models/info.model';
import { loadLocations, loadLocationsNewPages } from 'src/app/state/actions/locations.action';
import { locationsSelcetor, locationInfoSelector } from 'src/app/state/selectos/location.selector';
import { Location } from "../../../models/location.model";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations$: Observable<Location[]>;
  info$: Observable<Info>;
  locations:any[] = [];
  info: any = {} 

  constructor( private store: Store ) { 
    this.locations$ = this.store.select(locationsSelcetor);
    this.info$ = this.store.select(locationInfoSelector);
  }

  ngOnInit(): void {
    this.info$.subscribe( info => this.info = info );
    this.store.dispatch(loadLocations());
  }

  nextPage() {
    const page = this.info.next
    if (page) this.store.dispatch(loadLocationsNewPages({ url: page }));
  }

  prevPage() {
    const page = this.info.prev
    if (page) this.store.dispatch(loadLocationsNewPages({ url: page }));
  }
}
