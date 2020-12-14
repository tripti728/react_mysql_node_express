import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

// const create = (data) => {
//     return http.post("/users",data);
//   };
  
  const update = (id, data) => {
       return http.put(`/users/${id}`,data);
     };

export default {
    getAll,
    // get,
    
     update,
    // remove,
    // removeAll,
    // findByTitle,
    // login
  };