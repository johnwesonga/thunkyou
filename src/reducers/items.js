import { ITEMS_FETCH_DATA_SUCCESS } from '../constants/ActionTypes';

export function items(state = {}, action) {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        default:
            return state;
    }
}