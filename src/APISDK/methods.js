export const get = (url, headers = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers,
    })
      .then(res => res.json())
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        console.error(err)
        reject(err)
      })
  })
}