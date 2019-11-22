require('sugar').extend()
const serve      = require('koa-static')
const Koa        = require('koa')
const Router     = require('@koa/router')
const bodyParser = require('koa-bodyparser')
const OrientDBClient = require("orientjs").OrientDBClient;


const app = new Koa()
app.use(bodyParser())
app.use(serve('../web'))

let db_connection

const router = new Router()

router.get('/sitters', async (context) => {
  let cat_sitters = await db_connection.query("select from cat_sitters").all()
  context.response.body = cat_sitters
})

router.get('/photos/:id', async (context) => {
  let id = Buffer.from(context.params.id, 'base64').toString('utf8')
  let record = await db_connection.select().from(id).one()
  console.log(record)
})

router.post('/sitters', async (context) => {
  let cat_sitter = context.request.body
  cat_sitters.push(cat_sitter)
  context.response.status = 204
})

router.delete('/sitters', async (context) => {
  cat_sitters = []
  context.response.status = 204
})

app.use(router.routes()).use(router.allowedMethods())

let start = async () => {
  let db_server = await OrientDBClient.connect({
    host: "localhost",
    port: 2424
  })

  db_connection = await db_server.session({ name: "stuff", username: "root", password: "root" })
  
  app.listen(3000)
}

start()
