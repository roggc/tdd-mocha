import React,{useState} from 'react'
import {mount} from 'enzyme'
import chai from 'chai'

const C=()=>
{
  const [state,setState]=useState({showMessage:false})
  const clickButton=
  e=>
  setState({showMessage:!state.showMessage})
  const el=
  <div>
    {state.showMessage&& <div className='message'>hello</div>}
    <button onClick={clickButton}>click</button>
  </div>
  return el
}

export default
()=>
describe(
  'test1',
  ()=>
  {
    it(
      'react',
      ()=>
      {
        const wrapper=mount(<C></C>)
        chai.expect(wrapper.find('.message')).to.have.lengthOf(0)
        wrapper.find('button').simulate('click')
        chai.expect(wrapper.find('.message')).to.have.lengthOf(1)
        wrapper.find('button').simulate('click')
        chai.expect(wrapper.find('.message')).to.have.lengthOf(0)
      }
    )
  }
)
