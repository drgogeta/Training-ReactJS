import { baseUrl } from '../config/baseUrl'

export const fetchProducts = () => {
  return fetch(baseUrl + 'products')
  .then(response => {
      if (response.ok) return response;

      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
  .then(response => response.json())
  .catch(error => {
    return { error: true, message: error.message };
  })
}
