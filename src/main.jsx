import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

function app2(){
  return(
    <div className='vc'><p className="text animation">This is Varunmnx!! Hi</p></div>
  )
}
ReactDOM.render(
  [app2(),<App />],
  document.getElementById('root')
)
