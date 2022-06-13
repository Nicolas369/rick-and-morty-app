import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';

const routes: Routes = [
    { 
        path: '',
        children: [
            { path: 'list', component: CharactersListComponent },
            { path: 'list/:new', component: CharactersListComponent },
            { path: '**', redirectTo: 'list' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
