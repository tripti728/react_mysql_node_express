import React, { useState } from 'react'
import { Box, Header, Anchor, Nav, ResponsiveContext, Menu, Select, TextInput } from 'grommet'
import { Search } from 'grommet-icons';

function Home() {
    const options = ['title', 'locality'];
    const [value, setValue] = useState('');
    return (
        <Box>
             <Header background="dark-1" pad="medium">
    
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Box fill align="start" justify="start" width="3vw" >
            <Select
              id="select"
              name="select"
              placeholder="Select"
              value={value}
              options={options}
              onChange={({ option }) => setValue(option)}
              open
              size='small'
            />
            <TextInput icon={<Search />} placeholder="search ..." />
          </Box>
          ) : (
            <Box fill align="start" justify="start" direction='row-responsive'>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          open
          size='small'
        />
        <TextInput icon={<Search />} placeholder="search ..." />
      </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
        </Box>
    )
}

export default Home
