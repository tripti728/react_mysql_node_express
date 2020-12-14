import React from 'react';
import useForm from './useForm';
import {
    FormField,
    TextInput,
    Box,
    Button,
    Form,
    Heading,
    MaskedInput,
    Text,
    Grommet,
    ResponsiveContext,
  } from "grommet";
  
  import {
    User,
    MailOption,
    Lock,
    Directions,
    Phone,
    Hide,
    View,
  } from "grommet-icons";

import validate from './ValidateInfo'


const SignUpForm=({submitForm})=>{
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate);
    return(
        
    <Box align="center" justify="between" height="100vh" overflow="auto">
    <Box margin={("top", "-1vh")} align="center" height="100vh">
      <Heading>SignUp</Heading>
      <Form onSubmit={handleSubmit}>
        <Box overflow="auto">
          <Box direction="row-responsive">
            <Box margin={("right", "2vw")} direction="column">
              <FormField label="FullName" name="fullname" >
                <TextInput icon={<User />} name="fullname" type="text" placeholder="FullName" value={values.fullname}
                onChange={handleChange} />
              </FormField>
              {errors.fullname && <p>{errors.fullname}</p>}
              <FormField label="Email" name="email" required>
                <TextInput
                  name="email"
                  icon={<MailOption />}
                  type="email"
                  pattern="[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[com]{3}"
                  placeholder="abc@gmail.com"
                  value={values.email}
                onChange={handleChange}
                />
              </FormField>
              {errors.email && <p>{errors.email}</p>}
              <FormField label="Locality" name="locality" required>
                <TextInput
                  name="locality"
                  icon={<Directions />}
                  type="text"
                  placeholder="Locality"
                  value={values.locality}
                onChange={handleChange}
                />
              </FormField>
              {errors.locality && <p>{errors.locality}</p>}
<FormField label="aadhar-id" name="aadhar_id" required>
                <TextInput
                  name="aadhar_id"
                  icon={<MailOption />}
                  type="text"
                  pattern="^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$"
                  placeholder="xxxx-xxxx-xxxx"
                  value={values.aadhar_id}
                onChange={handleChange}
                />
              </FormField>
              {errors.aadhar_id && <p>{errors.aadhar_id}</p>}
<FormField label="Phone Number" name="phone_number" required>
                <TextInput
                  name="phone_number"
                  icon={<Phone />}
                  pattern="[0-9]{10}"
                  type="tel"
                placeholder="Phone Number"
                  value={values.phone_number}
                onChange={handleChange}
                />
              </FormField> 
              <FormField
                label="Password"
                name="password"
                required>
                <TextInput name="password" icon={<Lock />} type="password"  
                value={values.password}
                onChange={handleChange}/>
             </FormField>
             {errors.password && <p>{errors.password}</p>}
                <FormField 
                  label=" Confirm Password"
                  name="confirmpassword"
                  required>
                  <TextInput name="confirmpassword" icon={<Lock />} type="password" 
                  value={values.confirmpassword}
                onChange={handleChange}
                />
                
                </FormField>
                {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
            </Box>
            <Box margin={("left", "2vw")} direction="column">
              
            </Box>
          </Box>
          <Box direction="row" justify="center" margin={{ top: "medium" }}>
            <Button
              type="submit"
              label="Signup"
              primary
              margin={("right", "1vw")}
            />
            
          </Box>
        </Box>
      </Form>
     
    </Box>
  </Box>
    )
}
export default SignUpForm;




