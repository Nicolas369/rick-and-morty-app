import { createSelector, createFeatureSelector } from "@ngrx/store";
import { LocationList } from "src/app/models/location.model";

export const locations = createFeatureSelector<LocationList>('locations');

export const locationsSelcetor = createSelector(
    locations,
    (state: LocationList) => state.locations
);

export const locationInfoSelector = createSelector(
    locations,
    (state: LocationList) => state.info
)

export const locationsPageSelector = createSelector(
    locations,
    (state: LocationList) => state
)