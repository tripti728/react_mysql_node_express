import React from 'react';

import {Box,Button,FormField,TextInput,Text,Footer} from 'grommet';
import{Nav,Anchor} from 'grommet';

export const Header=()=>
{ 
    
    return(
        
       <div>
           
     
         <Nav direction="row">
             <Anchor label="Home" href="#" />
               <Anchor label="Profile" href="#" />
          </Nav>
        
        <FormField name="name" htmlfor="text-input-id" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <Box direction="row" gap="low">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
        <Footer background="light-4" justify="center" pad="small">
      <Text textAlign="center" size="small">
        © 2019 Copyright Grommet
      </Text>
    </Footer>
      </div>



    )


}