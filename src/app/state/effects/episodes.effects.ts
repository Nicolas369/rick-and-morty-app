import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap, map } from 'rxjs/operators';
import { EpisodesService } from 'src/app/services/episodes.service';
import { EpisodeList } from '../../models/episode.model';

@Injectable({ providedIn: 'root'})
export class EpisodesEffects {
     
    constructor(
        private actions$: Actions,
        private episodesService: EpisodesService
    ) {}

    loadLocations$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Episodes List] Load Episodes List'),
            switchMap(() => this.episodesService.getEpisodes().pipe(
                mergeMap((res: any) => {
                    const page = {
                        info: res.info,
                        episodes: res.results,
                    }
                    return [
                        {type: '[Episode List] Add Episode List with Info', episodes: page},
                        {type: '[Page of Episodes] Add Page', page }
                    ];
                }),
                catchError(() => EMPTY)
            ))
        )
    })
  

    loadEpisodesPerPage$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType('[Episodes List] Load Episodes New Page'),
            switchMap((action: any) => this.episodesService.getEpisodesPerPage(action.url).pipe(
                mergeMap((res: any[]) => {
                    if (res[1].inStore) {
                        return [{ type: '[Episode List] Add Episode List with Info', episodes: res[0] }];
                    }

                    const page: EpisodeList = { episodes: res[0].results, info: res[0].info, };
                    return [
                        { type: '[Episode List] Add Episode List with Info', episodes: page },
                        { type: '[Page of Episodes] Add Page', page: page }
                    ];
                }),
                catchError(() => EMPTY)
            ))
        )
    });

}