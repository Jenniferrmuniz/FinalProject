var baseURL = 'http://localhost:5000'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://pet-harmony.herokuapp.com'
}
module.exports = baseURL;