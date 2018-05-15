import React from 'react';
import Item from './Item';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

describe('Item Component' , () => {
    it('should render a profile', () => {
        const tree = toJson(shallow(<Item items={[]} />));
        expect(tree).toMatchSnapshot();
    });

    it('should match its snapshot with profiles', () => {
        const items = [{
            id: '1', 
            first_name: 'john', 
            avatar: 'foo.jpg'}];
        const tree = renderer.create(
          <Item items={items} />
        ).toJSON();      
        expect(tree).toMatchSnapshot();
    });
});