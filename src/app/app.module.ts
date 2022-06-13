import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { charactersReducer } from './state/reducers/characters.reducer';
import { pagesReducer } from './state/reducers/pages.reducer';
import { locationsReducer } from './state/reducers/location.reducer'; 
import { episodeReducer } from './state/reducers/episodes.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CharactersEffects } from './state/effects/characters.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationsEffects } from './state/effects/locations.effects';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { EpisodesEffects } from './state/effects/episodes.effects';
import { SearchService } from './services/search.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      characters: charactersReducer,
      locations: locationsReducer,
      episodes: episodeReducer,
      pages: pagesReducer
    }),
    EffectsModule.forRoot([
      CharactersEffects,
      LocationsEffects,
      EpisodesEffects
    ]),
    // this is for development purposes
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ],
  providers: [
    SearchService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
