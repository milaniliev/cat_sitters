const { Given, When, Then } = require("cucumber")
const { expect } = require("chai");
require('sugar').extend()
let fetch = require('node-fetch')

let server = 'http://localhost:3000'


Given('a cat sitter named Katie', async() => {
  let katie = { 
    name: "Katie Catt", 
    bio: "I love cats. I'm an art student and I have three cats. Or rather, three cats have meeee! LOL.",
    photo: "1.jpg",
    location: "New York, NY",
    rating: 4.0,
    rates: 10.00,
    availability: {
      from: Date.create("2018-01-01"),
      to: Date.create("2020-01-01")
    }
  }

  let response = await fetch(`${server}/sitters`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(katie)
  })

  if(!response.ok){ throw new Error(`Response was ${response.status}`) }

});

When('I log in', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('fetch cat sitters', async function () {
  let response = await fetch(`${server}/sitters`)
  this.sitters = await response.json()
})

Then('I should see Katie in the list of cat sitters', function () {
  expect(this.sitters.map((sitter) => sitter.name)).to.include('Katie Catt')
})
