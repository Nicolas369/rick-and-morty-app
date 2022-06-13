import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { CharactersService } from 'src/app/services/characters.service';



@NgModule({
  declarations: [
    CharactersListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CharactersService,
  ]
})
export class CharactersModule { }
