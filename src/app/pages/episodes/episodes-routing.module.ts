import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: EpisodesListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
