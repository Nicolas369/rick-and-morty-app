import { createReducer, on } from "@ngrx/store";
import { CharactersList } from "src/app/models/character.model";
import { addChracterList, addCahracterListPage, addCharaterListInfo } from "../actions/characters.action";

export const initialState: CharactersList = {
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    },
    results: [],
}


export const charactersReducer = createReducer(
    initialState,
    on(addCahracterListPage, (state, { characters }) => characters),
    on(addChracterList, (state, {characters}) => ({ ...state, results: characters, })),
    on(addCharaterListInfo, (state, { info }) => ({ ...state,  info: info, }))
)