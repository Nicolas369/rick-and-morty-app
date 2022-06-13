import { createAction, props } from "@ngrx/store";
import { LocationList, Location } from "src/app/models/location.model";

export const loadLocations = createAction(
    '[Location List] Load Location List'
);

export const loadLocationsNewPages = createAction(
    '[Location List] Load Loactions New Page',
    props<{ url: string}>()
)

export const addLocationsListPage = createAction(
    '[Location List] Add List with Info',
    props<{ locations: LocationList }>()
);

export const addLocationList = createAction(
    '[Location List] Add List',
    props<{locations: Location[]}>()
)
