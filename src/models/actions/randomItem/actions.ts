import {
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCES,
  FETCH_GET_DATA
} from "../../../constants/actions";

export const fetchGetData = ():any => ({
    type: FETCH_GET_DATA
})

export const fetchDataSucces = (data:Array<any>) => ({
    type: FETCH_DATA_SUCCES,
    payload: data
})

export const fetchDataError = ():any => ({
    type: FETCH_DATA_ERROR
})