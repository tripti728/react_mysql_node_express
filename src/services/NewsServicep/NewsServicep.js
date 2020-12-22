import axios from 'axios'

export async function getAll() {
  let news
  await axios.get('http://localhost:8080/api/news/findAllNewsAdmin').then(
    (response) => {
      //log(response);
      news = response.data.news
    },
    (error) => {
      //log(error);
    }
  )
  return news
}
