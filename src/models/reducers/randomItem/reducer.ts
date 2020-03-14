import {
  FETCH_DATA_SUCCES,
  FETCH_GET_DATA,
  FETCH_DATA_ERROR
} from "../../../constants/actions";
import { IRandomItemState } from "../../../types/storeTypes";
import { AllActionType } from "../../../types/actionsTypes";

const inititalState: IRandomItemState = {
  isLoad: false,
  error: false,
  data: []
};

export const randomItemReducer = (
  state: IRandomItemState = inititalState,
  action: AllActionType
) => {
    switch(action.type) {
        case FETCH_GET_DATA:
            return state;
        case FETCH_DATA_SUCCES:
            return { ...state, data: action.payload, isLoad: true }
        case FETCH_DATA_ERROR:
            return { ...state, error: true, isLoad: true }
        default:
            return state
    }
};
