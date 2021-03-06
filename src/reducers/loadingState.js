import { ITEMS_HAS_ERRORED, 
        ITEMS_IS_LOADING } 
        from '../constants/ActionTypes';
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}