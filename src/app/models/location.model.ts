import { Info } from "./info.model";

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface LocationList {
    locations: Location[];
    info: Info;
}