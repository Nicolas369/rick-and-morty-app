import { createSelector, createFeatureSelector } from "@ngrx/store";
import { PagesState } from "../reducers/pages.reducer";

export const pagesState = createFeatureSelector<PagesState>('pages');

export const selectCharactersPage = createSelector(
    pagesState,
    (state) => state.characterPages
);

export const selectLocationsPage = createSelector(
    pagesState,
    (state) => state.locationsPages
);

export const selectEpisodesPage = createSelector(
    pagesState,
    (state) => state.episodesPages
);