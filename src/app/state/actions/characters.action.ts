import { createAction, props } from "@ngrx/store";
import { Character, CharactersList } from "src/app/models/character.model";
import { Info } from "src/app/models/info.model";

export const loadCharacters = createAction(
    '[Character List] Load Characters'
);

export const loadCharactersNewPage = createAction(
    '[Character List] Load new Characters page',
    props<{ url: string }>()
);

export const loadCharactersByUrlList = createAction(
    '[Characte List] Load Characters by Url',
    props<{ urlList: string[] }>()
)

export const addCahracterListPage = createAction(
    '[Character List] Add List with Info',
    props<{ characters: CharactersList }>()
);

export const addChracterList = createAction(
    '[Character List] Add LIst',
    props<{characters: Character[]}>()
);

export const addCharaterListInfo = createAction(
    '[Character List Info] Add Info to List',
    props<{ info: Info}>()
);

