import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap, map } from 'rxjs/operators';
import { LocationList } from 'src/app/models/location.model';
import { LocationsService } from 'src/app/services/locations.service';

@Injectable({ providedIn: 'root'})
export class LocationsEffects {
     
    constructor(
        private actions$: Actions,
        private locationService: LocationsService
    ) {}

    loadLocations$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Location List] Load Location List'),
            switchMap(() => this.locationService.getLocation().pipe(
                mergeMap((res: any) => {
                    const page: LocationList = {
                        locations: res.results,
                        info: res.info,
                    }
                    return [
                        {type: '[Location List] Add List with Info', locations: page},
                        {type: '[Page of Locations] Add Page', page }
                    ];
                }),
                catchError(() => EMPTY)
            ))
        )
    })
  

    loadLocationsPerPage$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType('[Location List] Load Loactions New Page'),
            switchMap((action: any) => this.locationService.getLocationPerPage(action.url).pipe(
                mergeMap((res: any[]) => {
                    if (res[1].inStore) {
                        return [{ type: '[Location List] Add List with Info', locations: res[0] }];
                    }

                    const page: LocationList = { locations: res[0].results, info: res[0].info, };
                    return [
                        { type: '[Location List] Add List with Info', locations: page },
                        { type: '[Page of Locations] Add Page', page: page }
                    ];
                }),
                catchError(() => EMPTY)
            ))
        )
    });

}