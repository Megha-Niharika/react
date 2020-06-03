import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err => {
      console.log(err)
      return err.response
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response
    })
    .catch(err => {
      console.log(err)
      return err.response
    })
    
}
export const categories = cat => {
  return axios
    .get('/rooms', {
      c_id: cat.c_id,
      c_name: cat.c_name
    })
    .then(response => {
      return response
    })
    .catch(err => {
      console.log(err)
      return err.response
    })
    
}