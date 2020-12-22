import axios from 'axios'

export async function getMostRead() {
  let news
  await axios.get('http://localhost:8080/api/news/findMostReadNews').then(
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
