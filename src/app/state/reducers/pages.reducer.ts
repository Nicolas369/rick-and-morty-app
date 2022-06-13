import { createReducer, on } from "@ngrx/store";
import { CharacterPages, EpisodesPages, LocationPages } from "src/app/models/pages.model";
import { addCharactersPage, addEpisodesPage, addLocationsPage } from "../actions/pages.action";

export interface PagesState {
    characterPages: CharacterPages;
    episodesPages: EpisodesPages;
    locationsPages: LocationPages;
}

export const initialState: PagesState = {
    characterPages: [],
    episodesPages: [],
    locationsPages: [],
};

export const pagesReducer = createReducer(
    initialState,
    on(addCharactersPage, (state, { page }) => ({...state, characterPages: [...state.characterPages, page] })),
    on(addLocationsPage, (state, { page }) => ({...state, locationsPages: [...state.locationsPages, page] })),
    on(addEpisodesPage, (state, { page }) => ({...state, episodesPages: [...state.episodesPages, page] }))
);
