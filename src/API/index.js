import axios from "axios"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzMjA3NzA5LCJleHAiOjE2OTU3OTk3MDl9.tlBtXALZsL9ALwCWi8lNCNczmqB67cXeWrOl672Q_Vc'

export const getAllToDOList = async () => {
  const response = await axios.get('http://localhost:1337/api/lists', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.data
}

export const addList = async (payload) => {
  const response = await axios.request({
    method: 'POST',
    url: 'http://localhost:1337/api/lists',
    headers: { Authorization: `Bearer ${token}` },
    data: payload
  })

  return response
}

export const updateList = async (id, payload) => {
  const response = await axios.request({
    method: 'PUT',
    url: `http://localhost:1337/api/lists/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    data: payload
  })

  return response
}

export const deleteList = async (id) => {
  const response = await axios.request({
    method: 'DELETE',
    url: `http://localhost:1337/api/lists/${id}`,
    headers: { Authorization: `Bearer ${token}` },
  })

  return response
}
