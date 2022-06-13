import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { EffectsModule } from '@ngrx/effects';
import { LocationsEffects } from 'src/app/state/effects/locations.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';
import { LocationsService } from 'src/app/services/locations.service';



@NgModule({
  declarations: [
    LocationListComponent,
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([LocationsEffects])
  ],
  providers: [
    LocationsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class LocationsModule { }
