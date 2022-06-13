import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'characters', 
    loadChildren: () => import('./pages/characters/characters.module').then( m => m.CharactersModule )
  },
  { 
    path: 'character', 
    loadChildren: () => import('./pages/character/character.module').then( m => m.CharacterModule )
  },
  { 
    path: 'locations', 
    loadChildren: () => import('./pages/locations/locations.module').then( m => m.LocationsModule )
  },
  { 
    path: 'episodes', 
    loadChildren: () => import('./pages/episodes/episodes.module').then( m => m.EpisodesModule )
  },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
