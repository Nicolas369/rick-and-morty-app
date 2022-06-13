import { createReducer, on } from '@ngrx/store';
import { LocationList } from 'src/app/models/location.model';
import { addLocationList, addLocationsListPage } from "../actions/locations.action";

export const initialState:LocationList = {
    locations: [],
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    }
};

export const locationsReducer = createReducer(
    initialState,
    on(addLocationsListPage, (state, { locations }) => locations ),
    on(addLocationList, (state, { locations }) => ({...state, locations: locations }))
);