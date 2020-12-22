import http from '../../component/HTTP/http-common'

const getAll = () => {
  return http.get('/news')
}

const latestNews = () => {
  return http.get('/news/latest')
}

const get = (id) => {
  return http.get(`/news/onenews/${id}`)
}

const create = (data) => {
  return http.post('/news', data)
}

const update = (id, data) => {
  return http.put(`/news/countclick/${id}`, data)
}

const remove = (id) => {
  return http.delete(`/news/${id}`)
}

const removeAll = () => {
  return http.delete(`/news`)
}

const findByTitle = (title) => {
  return http.get(`/news/bytitle?title=${title}`)
}

const findByLocality = (locality) => {
  return http.get(`/news/bylocality?locality=${locality}`)
}

const FindOne = (id) => {
  let c = http.get(`/news/onenews?id=${id}`)
  //log(c)
  return c
}

const getReporter = (id) => {
  //log(id)
  let c = http.get(`/users/newsreporter?id=${id}`)
  //log(c)
  return c
}
const getTopTen = () => {
  return http.get(`/news/topten`)
}

const reporterNews = (id) => {
  let c = http.get(`/news/rnews?id=${id}`)
  //log(c)
  return c
}

//Admin Integrate

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  findByLocality,
  FindOne,
  getTopTen,
  latestNews,
  reporterNews,
  getReporter,
}
