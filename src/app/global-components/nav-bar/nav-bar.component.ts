import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {

  searchInput = new FormControl();

  constructor( private router: Router, private search: SearchService) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.searchInput.setValue('');
    } );
    
    this.searchInput.valueChanges.subscribe(
      val => this.search.searchPerPAge(val)
    );

  }

}
