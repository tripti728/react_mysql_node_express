import http from '../../component/HTTP/http-common'

const create = (data) => {
  return http.post('/issue', data)
}

export default {
  create,
}
