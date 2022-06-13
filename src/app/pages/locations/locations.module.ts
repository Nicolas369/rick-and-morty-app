import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCardComponent } from './components/location-card/location-card.component';



@NgModule({
  declarations: [
    LocationListComponent,
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
  ],
  providers: [
  ]
})
export class LocationsModule { }
