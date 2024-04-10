import React from 'react'

import { Loader } from 'loader-nacho'
import 'loader-nacho/dist/index.css'

const App = () => {
  return <Loader icon={window.location.origin + '/mic.webp'} />
}

export default App
