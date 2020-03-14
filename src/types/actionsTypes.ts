import { FETCH_GET_DATA, FETCH_DATA_SUCCES, FETCH_DATA_ERROR } from '../constants/actions'

export interface IActionWithPayload {
    payload: Array<any>,
    type: typeof FETCH_DATA_SUCCES
}

export interface IActionWithoutPayload {
    type: typeof FETCH_GET_DATA | typeof FETCH_DATA_ERROR
}

export type AllActionType = IActionWithPayload | IActionWithoutPayload