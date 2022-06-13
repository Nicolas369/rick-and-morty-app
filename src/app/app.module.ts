import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { charactersReducer } from './state/reducers/characters.reducer';
import { pagesReducer } from './state/reducers/pages.reducer';
import { locationsReducer } from './state/reducers/location.reducer'; 
import { episodeReducer } from './state/reducers/episodes.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchService } from './services/search.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './global-components/nav-bar/nav-bar.component';
import { FrontPageComponent } from './global-components/front-page/front-page.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      characters: charactersReducer,
      locations: locationsReducer,
      episodes: episodeReducer,
      pages: pagesReducer
    }),
    EffectsModule.forRoot([]),
    
    // this is for development purposes
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
