import React from 'react'
import C from './index'
import {mount} from 'enzyme'
import 'chai/register-should'

export default
()=>
describe(
  'app',
  ()=>
  {
    it(
      'has a button when clicked message appears and disappears',
      ()=>
      {
        const wrapper=mount(<C></C>)
        wrapper.find('.message').should.have.lengthOf(0)
        wrapper.find('button').simulate('click')
        wrapper.find('.message').should.have.lengthOf(1)
        wrapper.find('button').simulate('click')
        wrapper.find('.message').should.have.lengthOf(0)
      }
    )
  }
)
