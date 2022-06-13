import { createReducer, on } from "@ngrx/store";
import { EpisodeList } from "src/app/models/episode.model";
import { addEpisodesList, addEpisodes } from "../actions/episodes.action";

export const initialState: EpisodeList = {
    episodes: [],
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    }
}

export const episodeReducer = createReducer(
    initialState,
    on(addEpisodesList, (state, { episodes }) => episodes),
    on(addEpisodes, (state, { episodes }) => ({...state, episodes: episodes}))
);