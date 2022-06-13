import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCharactersInfo, selectCharactersList } from '../state/selectos/characters.selector';
import { episodesInfoSelector, episodesSelector } from '../state/selectos/episodes.selectore';
import { locationInfoSelector, locationsSelcetor } from '../state/selectos/location.selector';
import { Router } from '@angular/router';
import { addChracterList } from '../state/actions/characters.action';
import { addEpisodes } from '../state/actions/episodes.action';
import { addLocationList } from '../state/actions/locations.action';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    lists: any = {
        characters:  { list: [], page: 0 },
        locations:  { list: [], page: 0 },
        episodes:  { list: [], page: 0 },
    }

    infos: any = {
        characters:  0,
        locations:  0,
        episodes:  0,
    }
    
    actionDispatcher: any = {
        characters:(val: any) => addChracterList({characters: val}),
        locations: (val: any) => addLocationList({ locations: val }),
        episodes: (val: any) =>  addEpisodes({ episodes: val }),
    }

    constructor( 
        private store: Store, 
        private router: Router 
    ) {

        this.store.select(selectCharactersInfo).subscribe( info => this.infos.characters = this.setInfo(info));
        this.store.select(episodesInfoSelector).subscribe( info => this.infos.episodes = this.setInfo(info));
        this.store.select(locationInfoSelector).subscribe( info => this.infos.locations = this.setInfo(info));

        this.store.select(selectCharactersList).subscribe(list => {
            if(this.lists.characters.page !== this.infos.characters) {
                this.lists.characters.list = list;
                this.lists.characters.page = this.infos.characters;
            }
        })
        this.store.select(locationsSelcetor).subscribe(list => {
            if(this.lists.locations.page !== this.infos.locations) {
                this.lists.locations.list = list;
                this.lists.locations.page = this.infos.locations;
            }
        })
        this.store.select(episodesSelector).subscribe(list => {
            if(this.lists.episodes.page !== this.infos.episodes) {
                this.lists.episodes.list = list;
                this.lists.episodes.page = this.infos.episodes;
            }
        })

    }

    setInfo(info: any) {
        if (info.next) {
            return (parseInt(info.next.split('=')[1]) - 1) ;
        }
        return 0;
    }

    setList(list: any[], state: any[]) {
        if (list.length === 0) return state;
        return list;
    }

    searchPerPAge(word: string) {
        const page = this.router.url.split('/')[1];
        let searchList: any[] = this.lists[page].list;
        const newList = this.search(word, searchList);
        this.store.dispatch(this.actionDispatcher[page](newList));
    }

    search(word: string, list: any) {
        if (word.length >= 1) {
            return list.filter( 
                (item: any) => item.name.toLowerCase().includes( word.toLowerCase() )
            )
        }
        return list;
    }

}
