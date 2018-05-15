import React from 'react';
import {ItemList} from './ItemList';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';


describe('ItemList Component', () => {
    const initialState = {items: {}}
    const mockStore = configureStore()
    let store,container, wrapper

    const mockedCallback = () => Promise.resolve({foo: 'bar'});
    let promise;
    const loadData = () => {
      promise = Promise.resolve().then(mockedCallback);
      return promise;
    };

    const itemListProps = {
        fetchData: jest.fn(),
        items: {},
        hasErrored: false,
        isLoading: false,
    }

    beforeEach(()=>{
       store = mockStore(initialState)
       wrapper = shallow(<Provider store={store}><ItemList {...itemListProps}/></Provider> )  
    });

    it(' snapshot ItemList ', () =>{
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('render the ItemList component', () => {
        expect(wrapper.find(ItemList).length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(ItemList).prop('items')).toEqual(initialState.items)
     });

});
