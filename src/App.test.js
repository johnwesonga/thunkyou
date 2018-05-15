import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRenderer } from 'react-test-renderer/shallow'
import ItemList from '../src/components/ItemList';


const setup = propOverrides => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}
describe('components', () => {
  describe('ItemList', () => {
    it('should render', () => {
      const output = setup()
      const itemList  = output.props.children
      //console.log(output.props.children);
      expect(itemList.type).toBe(ItemList)
    })
  })
})
