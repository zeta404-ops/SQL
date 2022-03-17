import axios from 'axios'
const baseUrl = '/api/reminders'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => { return response.data })

}

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { getAll, create, update }