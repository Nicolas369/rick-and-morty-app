import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rick & Morty App';
  frontPage = true;

  searchInput = new FormControl();


  constructor( private router: Router, private search: SearchService) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.frontPage = event.url === '/';
      this.searchInput.setValue('');
    } );
    
    this.searchInput.valueChanges.subscribe(
      val => this.search.searchPerPAge(val)
    );

  }

}
