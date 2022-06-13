import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { CharactersService } from 'src/app/services/characters.service';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from 'src/app/state/effects/characters.effects';
import { HttpInterceptorService } from 'src/app/services/http-interceptor.service';



@NgModule({
  declarations: [
    CharactersListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([CharactersEffects])
  ],
  providers: [
    CharactersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class CharactersModule { }
