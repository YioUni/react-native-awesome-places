import {
  ADD_PLACE,
  SELECT_PLACE,
  DELETE_PLACE,
  UNSELECT_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: UNSELECT_PLACE
  };
};
