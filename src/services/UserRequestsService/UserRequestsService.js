import axios from 'axios'

export async function getAll(data) {
  let user
  await axios.get('http://localhost:8080/api/users/findNotApprUsers').then(
    (response) => {
      //log(response);
      user = response.data.users
    },
    (error) => {
      //log(error);
    }
  )
  return user
}

export async function update(data) {
  await axios
    .post('http://localhost:8080/api/users/updateUsersIsAppr', data)
    .then(
      (response) => {
        //log(response);
      },
      (error) => {
        //log(error);
      }
    )
}

export async function remove(data) {
  await axios
    .post('http://localhost:8080/api/users/deleteRejectedUser', data)
    .then(
      (response) => {
        //log(response);
      },
      (error) => {
        //log(error);
      }
    )
}
