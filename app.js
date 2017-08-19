const app = require('./src')
const port = process.env.PORT || 7000
const { storage } = require('./src/config')

global.appRoot = __dirname

app.set('port', port)

app.listen(port, _ => {
  const storageType = process.argv[2];
  const thisStorage = storage[storageType];

  console.log(`server start => port : ${port} && storage = ${storageType}`)
})