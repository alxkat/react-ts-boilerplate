import React from 'react'
import { hot } from 'react-hot-loader/root'
import { hello } from 'utils'

const greeting = hello({
  name: 'root',
  type: 'hello'
})

const App = () => (
  <div>
    {greeting}
  </div>
)

export default hot(App)