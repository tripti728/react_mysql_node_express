import axios from 'axios'

export async function getAll(id) {
  let news
  await axios
    .get(`http://localhost:8080/api/news/findAllNewsWithIssuesById/${id}`)
    .then(
      (response) => {
        //log(response)
        news = response.data.news
      },
      (error) => {
        //log(error);
      }
    )
  return news
}

export async function remove(id) {
  await axios.delete(`http://localhost:8080/api/news/${id}`).then(
    (response) => {
      //log(response)
    },
    (error) => {
      //log(error);
    }
  )
}
