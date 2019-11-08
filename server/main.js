require('sugar').extend()
const serve = require('koa-static');
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const app = new Koa()
app.use(bodyParser())
app.use(serve('../web'))

let cat_sitters = [
  {
    name: "Katherine Catt", 
    bio: "I have been a cat owner for over 30 years. Me and my current cats, Snowglobe and Cornwall, have pleasant evenings together.",
    photo: "2.jpg",
    location: "Westchester, NY",
    rating: 5.0,
    rates: 20.00,
    availability: {
      from: Date.create("2019-11-01"),
      to: Date.create("2019-11-31")
    }
  },
  {
    name: "Kat Catt", 
    bio: "KITTIES ARE THE BEST!!! Like if you agree!",
    photo: "3.jpg",
    location: "Hempstead, NY",
    rating: 3.0,
    rates: 7.00,
    availability: {
      from: Date.create("2019-12-01"),
      to: Date.create("2020-01-01")
    }
  }
] 


const router = new Router();

router.get('/sitters', async (context) => {
  context.response.body = cat_sitters
})

router.post('/sitters', async (context) => {
  let cat_sitter = context.request.body
  cat_sitters.push(cat_sitter)
  context.response.status = 204
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);