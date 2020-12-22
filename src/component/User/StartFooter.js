import React from 'react'

import { Footer, Text } from 'grommet'

export const SimpleFooter = () => (
  <Footer
    background='dark-1'
    justify='center'
    pad='small'
    style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '2.5rem',
    }}
  >
    <Text textAlign='center' size='small'>
      © 2020 Copyright E-News
    </Text>
  </Footer>
)
