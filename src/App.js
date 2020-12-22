import React from 'react'
import { Grommet, Footer, Box } from 'grommet'
import { AppBar, Collapsable } from './component/User/StartHeader'
import { SimpleFooter } from './component/User/StartFooter'
import { Navi } from './Route/Navi'
import ContainHeader from './container/containnavi'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

function App() {
  return (
    <Grommet theme={theme} full={true}>
      <Box style={{ 'min-height': '100%' }}>
        <ContainHeader></ContainHeader>
        <Navi></Navi>
        <SimpleFooter></SimpleFooter>
      </Box>
    </Grommet>
  )
}

export default App
