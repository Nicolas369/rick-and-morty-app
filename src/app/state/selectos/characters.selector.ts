import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CharactersList } from "src/app/models/character.model";

export const characters = createFeatureSelector<CharactersList>('characters');

export const selectCharactersList = createSelector(
    characters, 
    (state: CharactersList) => state.results
);

export const selectCharactersInfo = createSelector(
    characters,
    (state: CharactersList) => state.info
);


export const selectCharactersPage = createSelector(
    characters,
    (state: CharactersList) => state.info
);