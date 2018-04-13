import { combineReducers } from 'redux';
import { items } from './items';
import { itemsHasErrored, itemsIsLoading } from "./loadingState";
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});