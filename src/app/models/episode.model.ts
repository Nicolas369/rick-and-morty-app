import { Info } from "./info.model";

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
} 

export interface EpisodeList {
    episodes: Episode[];
    info: Info;
}