import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EpisodesService } from 'src/app/services/episodes.service';
import { CharactersService } from 'src/app/services/characters.service';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';
import { EffectsModule } from '@ngrx/effects';
import { EpisodesEffects } from 'src/app/state/effects/episodes.effects';


@NgModule({
  declarations: [
    EpisodesListComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([EpisodesEffects])
  ],
  providers: [
    EpisodesService,
    CharactersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class EpisodesModule { }
