import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'list', component: LocationListComponent},
    { path: '**', redirectTo: 'list' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
