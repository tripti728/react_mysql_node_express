import axios from "axios";
import { useState } from "react";

var msg = "";
var lmsg='';

export async function RegisterUser(data) {
  await axios.post("http://localhost:8080/api/users", data).then(
    (response) => {
     
        console.log(response);
        msg = "Your Details have been submited & login after confirmation email ";
      
     
    },
    (error) => {
      console.log(error)
     msg="Email Already Exist";
    }
  );
  return msg;
}

export async function FindUser(data) {
  await axios.post("http://localhost:8080/api/users/findUser", data).then(
    (response) => {
       console.log(response.data)
      if(response.data.user)
      {
          
      sessionStorage.setItem('user',JSON.stringify(response.data.user));
      lmsg=response.data.msg;
      
     
      }
      else if(response.data.msg)
      {

      
      lmsg=response.data.msg;
      console.log(response.data.msg)
      }
      else if(response.data.per)
      {
        lmsg=response.data.per;
      console.log(response.data.per)
      }
    },
    (error) => {
      console.log(error);
    }
  );
  return lmsg;
}




export async function GetUser(data) {
  let user;
  await axios.get("http://localhost:8080/api/users/getUser").then(
    (response) => {
       console.log(response)
      user=response.data.users;
      
    },
    (error) => {
      console.log(error);
    }
  
  );
  return user;
}



export async function addPermission(data) {
 
  await axios.post("http://localhost:8080/api/users/setPermission",data).then(
    (response) => {
       console.log(response)
     
      
    },
    (error) => {
      console.log(error);
    }
  
  );

}

export async function DeleteUser(data) {
 
  await axios.post("http://localhost:8080/api/users/DeleteUser",data).then(
    (response) => {
       console.log(response)
     
      
    },
    (error) => {
      console.log(error);
    }
  
  );

}

export async function getReporter(id) {
 
  await axios.get("http://localhost:8080/api/users/getRepoter",id).then(
    (response) => {
       console.log(response)
     
       return response.data;
    },
    (error) => {
      console.log(error);
    }
  
  );
 

}