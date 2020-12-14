import React from 'react';
import  { useState, useEffect } from "react";
import UserRequestsDataService from "../../Services/UserRequestsService/UserRequestsService";
import { Button } from 'grommet';



 export const UserRequests=()=>{
    const [users,setUsers]=useState();
    useEffect(() => {
        retrieveUsers();
      }, []);

    const retrieveUsers=()=>{

        UserRequestsDataService.getAll().then(response =>{
            setUsers(response.data);
            console.log(response.data);
        }).catch(e =>{
            if(e)
            {
                console.log(e);
            }
        })
        
    }

    //Making isApproved field true to database---update call
    const isApprovedTrue=(uid)=>{
        alert(uid);
        let data ={
            isApproved : 1,
            //userId : uid
        
        };
        UserRequestsDataService.update(uid,data).then(response =>{
            console.log("Approved");
            
        })
        .catch(e =>{
            if(e)
            {
                console.log(e);
                
            }
        })
    }

    //Delete user from database who is rejected by admin
    const userReject=(uid)=>{
        alert(uid);
        UserRequestsDataService.remove(uid).then(response =>{
            console.log("Rejected");
        })

        .catch(e =>{
            if(e)
            {
                console.log(e);
                
            }
        })

    }


    return(
        <div>
              
            <h4>User Requests to Approve</h4>

<ul className="list-group">
  {users &&
    users.map((userslist, index) => (
        
      <li key={index}>
        {userslist.Uname}<Button primary label="Approve" onClick={() => isApprovedTrue(userslist.Uid)} />
        <Button primary label="Reject" onClick={() => userReject(userslist.Uid)} />
        
       
      </li>
    ))}
</ul>
            </div>
    );
}

export default UserRequests;