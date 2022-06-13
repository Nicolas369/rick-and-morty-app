import { createSelector, createFeatureSelector } from "@ngrx/store";
import { EpisodeList } from "src/app/models/episode.model";

export const episodes = createFeatureSelector<EpisodeList>('episodes');

export const episodesSelector = createSelector(
    episodes,
    (state: EpisodeList) => state.episodes
);

export const episodesInfoSelector = createSelector(
    episodes,
    (state: EpisodeList) => state.info
);
export const episodesPageSelector = createSelector(
    episodes,
    (state: EpisodeList) => state
);