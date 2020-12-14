import React, { useState } from 'react';
import { FormField, TextInput, Box, Button, Form, Heading ,Text} from 'grommet';
import { useHistory } from 'react-router-dom';
import { MailOption, Lock } from 'grommet-icons';
import {FindUser} from '../call/UserCall'





// This example shows a way to perform validation across multiple fields.
export const ULogin = (props) => {
  
  let history=useHistory();
  
    const [value,setValue]=useState({email:'',password:''})
    const [message, setMessage] = useState("");
    const HandleData=async (event)=>{
        console.log(value);
        let msg= await FindUser(value);
        setMessage(msg);
        let user=sessionStorage.getItem('user');
        let parsesuser=JSON.parse(user);
        console.log(parsesuser)
        if(parsesuser==null)
        {
        setMessage(msg)
        }else{
        if(parsesuser.role=='admin')
        {
          props.setlog(true);
        history.push('/Admin');
       
        }
        else
        {
          props.setlog(true);
        history.push('/Reporter');
      
        }
        }


    }
 return(
     <Box align="center" justify="between" height="90vh" >
         <Box margin={"top","20vh"} align="center">
         <Heading>Login</Heading>
         <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={HandleData}
          >
            
            <FormField label="Email" name="email" required>
              <TextInput  icon={<MailOption />} name="email" type="email"  pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[com]{3}"
                    placeholder="abc@gmail.com"  />
            </FormField>
            <FormField label="Password" name="password" required>
              <TextInput icon={<Lock />} name="password" type="password" />
            </FormField>

            

            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" label="Login" primary />
              <Button  label="Signup" onClick={()=>{history.push('/Signup')}}/>
              
            </Box>
           
          </Form>
          {message && (
              <Box pad={{ horizontal: 'small' }}>
                <Text color="#00C781">{message}</Text>
              </Box>
            )}
    </Box>
    </Box>
 );
  
};
