import { createAction, props } from '@ngrx/store';
import { Episode, EpisodeList } from 'src/app/models/episode.model';

export const loadEpisodes = createAction(
    '[Episodes List] Load Episodes List'
);

export const loadEpisodesNewPages = createAction(
    '[Episodes List] Load Episodes New Page',
    props<{ url: string}>()
);


export const addEpisodesList  = createAction(
    '[Episode List] Add Episode List with Info',
    props<{ episodes: EpisodeList}>()
);

export const addEpisodes = createAction(
    '[Episode List] Add Episodes List',
    props<{ episodes: Episode[]}>()
);