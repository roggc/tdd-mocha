import React,{useState} from 'react'

export default
()=>
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
