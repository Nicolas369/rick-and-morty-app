import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { Info } from 'src/app/models/info.model';
import { CharactersService } from 'src/app/services/characters.service';

@Injectable({ providedIn: 'root'})
export class CharactersEffects {
     
    constructor(
        private actions$: Actions,
        private charactersService: CharactersService
    ) {}
 
    loadCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType('[Character List] Load Characters'),
            switchMap(() => this.charactersService.getCharacters().pipe(
                mergeMap((res: any) => [
                    {type: '[Character List] Add List with Info', characters: res },
                    {type: '[Page of Characters] Add Page', page: res }
                ]),
                catchError(() => EMPTY)
            ))
        )
    });

    loadCharactersPerPage$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType('[Character List] Load new Characters page'),
            switchMap((action: any) => this.charactersService.getCharactersPerPage(action.url).pipe(
                mergeMap((res: any[]) => {
                    if (res[1].inStore) {
                        return [{ type: '[Character List] Add List with Info', characters: res[0] }];
                    }
                    return [
                        { type: '[Character List] Add List with Info', characters: res[0] },
                        { type: '[Page of Characters] Add Page', page: res[0] }
                    ];
                }),
                catchError(() => EMPTY)
            ))
        )
    });

    loadCharacterByUrl$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType('[Characte List] Load Characters by Url'),
            switchMap((action: any) =>this.charactersService.getCharactersByUrlList(action.urlList).pipe(
                mergeMap((res: any[]) => {
                    const info: Info = { count: 0, pages: 0, next: null, prev: null, };
                    return [
                        { type: '[Character List] Add LIst', characters: res },
                        { type: '[Character List Info] Add Info to List', info }   
                    ]
                }) 
            ))
        )
    });

}