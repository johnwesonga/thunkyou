import React from 'react';
import ItemList from './ItemList';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('ItemList Component', () => {
    const initialState = {}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ItemList store={store} /> )  
    })
});
