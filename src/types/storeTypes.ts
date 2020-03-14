export interface IMainState {
    pageType: string,
    error: boolean,
}

export interface IRandomItemState {
    isLoad: boolean,
    error: boolean
    data: Array<any>
}

export interface IItemsListState {
    isLoad: boolean,
    error: boolean,
    data: Array<any>
}

export interface IAllState {
    randomItem: IRandomItemState
}
