import { createAction, props } from "@ngrx/store";
import { CharactersList } from "src/app/models/character.model";
import { EpisodeList } from "src/app/models/episode.model";
import { LocationList } from "src/app/models/location.model";


export const addCharactersPage = createAction(
    '[Page of Characters] Add Page',
    props<{page: CharactersList}>()
)

export const addLocationsPage = createAction(
    '[Page of Locations] Add Page',
    props<{page: LocationList}>()
)

export const addEpisodesPage = createAction(
    '[Page of Episodes] Add Page',
    props<{page: EpisodeList}>()
)
