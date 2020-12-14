import React, { useEffect, useState, useContext } from 'react'
import { Box, CardFooter, Card, CardBody, Grid,Text, Button, CardHeader, ResponsiveContext } from 'grommet'
import { GetUser, addPermission ,DeleteUser} from '../call/UserCall';
import { Favorite, ShareOption, Validate, Clear } from 'grommet-icons';




function AdminAccept() {
 
  
  const [up,setUp]=useState(0);
  const [users,setUsers]=useState([]);
  const size = useContext(ResponsiveContext);

    useEffect(
     async function up(){
        await GetUser().then(result=>setUsers(result)); 
       
      
       },[]);
       console.log(users)
       const sPermission=async (data)=>{
         console.log(data)
        let e={email:data}
       await addPermission(e);
       await GetUser().then(result=>setUsers(result)); 
     }
     const RemoveUser=async (data)=>{
      console.log(data)
     let e={email:data}
    await DeleteUser(e);
    await GetUser().then(result=>setUsers(result)); 
  }
      

   console.log(users)
    return (
       <Box width='100vw' height='100vh' alignContent='center' pad='small' overflow='auto'>
         <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
            {users.map((user,i)=>(
              <Card  height="medium" width='medium' background="light-1">
              <CardHeader pad="small" >Request Permission</CardHeader>
            <CardBody pad="medium" >
              <p>email: {user.EmailId}</p>
              <p>city: {user.Locality}</p>
              <p>mobile no: {user.MobNo}</p>
              <p>addhar no: {user.AadharId}</p>
             
            </CardBody>
              <CardFooter pad={{horizontal: "small"}} background="light-2">   
             
            <Button icon={<Validate color="plain" />} hoverIndicator  onClick={()=>sPermission(user.EmailId)}/>
            <Button icon={<Clear color="plain" />} hoverIndicator onClick={()=>RemoveUser(user.EmailId)}/>
            </CardFooter>
        </Card>
        
            ))}

            </Grid>
       </Box>
    )
}

export default AdminAccept
